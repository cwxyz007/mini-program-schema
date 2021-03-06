const TJS = require('typescript-json-schema')
const path = require('path')
const glob = require('fast-glob')
const fs = require('fs')
const program = require('commander')
const { configs } = require('./configs')

const resolve = (...args) => path.join(__dirname, '..', ...args)
const outputDir = resolve('schema')

program
  .command('g [name]')
  .description('指定类型，可选值：ali,wx')
  .action(generateAction)

program.parse(process.argv)

async function generateAction(name) {
  const defaultName = 'all'

  const config =
    configs.find((f) => f.name === name) ||
    configs.find((f) => f.name === defaultName)

  const inputs = await glob(config.input, { cwd: resolve() })

  inputs.forEach((input) => generateSchema(resolve(input), config.type))
}

function generateSchema(dtsPath, type) {
  const program = TJS.getProgramFromFiles([dtsPath], {})
  const schema = TJS.generateSchema(program, type, {})
  const parsed = path.parse(dtsPath)

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir)
  }

  fs.writeFileSync(
    path.join(outputDir, parsed.base.replace('.d.ts', '') + '.json'),
    JSON.stringify(schema, null, 2)
  )
  console.log(`Generate success: ${parsed.base}`)
}
