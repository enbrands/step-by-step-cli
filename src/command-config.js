const COMMAND_LIST = [
  {
    command: 'create <projectName>',
    description: 'create a new project',
    alias: 'c',
    options: [
      ['-r, --react', 'react template'],
      ['-v, --vue', 'vue template'],
      ['-v2, --vue2', 'vue2 template'],
      ['-v3, --vue3', 'vue3 template']
    ],
    action: require('./commandHandler/create'),
    examples: ['-r', '--react', '-v', '--vue', '-v2', '--vue2', '-v3', '--vue3'].map((v) => `create projectName ${v}`)
  }
]

module.exports = COMMAND_LIST
