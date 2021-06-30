const logs = require('../utils/log.js')
const ora = require('ora')

logs.errLog('this is a error msg')
logs.infoLog('this is a info msg')
logs.successLog('this is a sussess msg')
logs.warnLog('this is a warn msg')

const spinner = ora()
spinner.text = '正在加载...'
spinner.start()

new Promise((resolve, reject) => {
  setTimeout(Math.random() > 0.5 ? resolve : reject, 3000)
})
  .then((_) => {
    spinner.succeed('加载成功')
  })
  .catch((_) => {
    spinner.fail('加载失败')
  })
