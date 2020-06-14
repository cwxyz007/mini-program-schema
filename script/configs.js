const configs = [
  {
    name: 'ali',
    input: 'src/ali.*.d.ts',
    output: 'build',
    type: 'IOption'
  },
  {
    name: 'wx',
    input: 'src/wx.*.d.ts',
    output: 'build',
    type: 'IOption'
  },
  {
    name: 'all',
    input: 'src/*.d.ts',
    output: 'build',
    type: 'IOption'
  }
]

exports.configs = configs
