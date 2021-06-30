#!/usr/bin/env node
const program = require('commander')
const inquirer = require('inquirer')

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
      })
  })
program.version('1.0.0').parse(process.argv)
