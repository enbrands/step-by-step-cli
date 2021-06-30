#!/usr/bin/env node
const program = require('commander')
const inquirer = require('inquirer')
const ora = require('ora')
const download = require('download-git-repo')
const { errLog, successLog } = require('../src/utils/log.js')

console.log("i'm a cli")

// 打印参数
console.log(process.argv)

program
  .command('create <projectName>')
  .description('create a new project')
  .alias('c')
  .option('-r, --react', 'react template')
  .option('-v, --vue', 'vue template')
  .option('-v2, --vue2', 'vue2 template')
  .option('-v3, --vue3', 'vue3 template')
  .action((projectName, options) => {
    console.log(projectName, options)
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'frameTemplate',
          message: '请选择框架类型',
          choices: ['Vue3', 'Vue2', 'React']
        }
      ])
      .then((answer) => {
        console.log(answer)
        const spinner = ora()
        spinner.text = '正在下载模板...'
        spinner.start()
        download(
          '', // 模板仓库地址 例如：direct:http://
          projectName,
          { clone: true },
          function (err) {
            if (err) {
              spinner.fail('模板下载失败')
              errLog(err)
            } else {
              spinner.succeed('模板下载成功')
              successLog('项目初始化完成')
            }
          }
        )
      })
  })
program.version('1.0.0').parse(process.argv)
