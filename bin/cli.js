#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const COMMAND_LIST = require('../src/command-config')

console.log("i'm a cli")

// 打印参数
console.log(process.argv)

// help命令 把example显示出去
const help = () => {
  console.log('\n')
  console.log(chalk.green('如何使用:'))
  COMMAND_LIST.forEach((command, index) => {
    console.log('  ', chalk.keyword('orange')(index + 1), `${command.command}命令`)
    command.examples.forEach((example) => {
      console.log(`     - mycli ${example}`)
    })
  })
}

/**
 * 注册option
 * @param {Object} commander commander实例
 * @param {Object} option 每个命令配置对象
 * @returns commander
 */
const registerOption = (commander, option) => {
  return option && option.length ? commander.option(...option) : commander
}
/**
 * 注册action
 * @param {Object} commander commander实例
 * @param {Object} commandEle 每个命令配置对象
 * @returns commander
 */
const registerAction = (commander, commandEle) => {
  const { command, description, alias, options, action } = commandEle
  const c = commander
    .command(command) // 命令的名称
    .description(description) // 命令的描述
    .alias(alias)
  // 循环options
  options && options.reduce(registerOption, c)
  c.action(action)
  return commander
}

// 循环创建命令
COMMAND_LIST.reduce(registerAction, program)

program.on('-h', help)
program.on('--help', help)
program.version('1.0.0').parse(process.argv)
