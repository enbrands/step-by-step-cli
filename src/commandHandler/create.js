const inquirer = require('inquirer')
const ora = require('ora')
const download = require('download-git-repo')
const { errLog, successLog } = require('../utils/log.js')

const create = (projectName, options) => {
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
        'direct:http://git.dev.enbrands.com/fe-construction/template-vue.git',
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
}

module.exports = create
