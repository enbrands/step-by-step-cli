'use strict'
const chalk = require('chalk')
const symbols = require('log-symbols')
const errLog = (log) => {
  console.log(symbols.error, chalk.red(log))
}
const successLog = (log) => {
  console.log(symbols.success, chalk.green(log))
}
const infoLog = (log) => {
  console.log(symbols.info, chalk.grey(log))
}

const warnLog = (log) => {
  console.log(symbols.warning, chalk.cyan(log))
}

const customLog = ({ symbols, color, log }) => {
  console.log(symbols[symbols], chalk[color](log))
}

module.exports = exports = { errLog, successLog, warnLog, infoLog, customLog }
