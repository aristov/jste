const test = require('ava')
const jste = require('../lib/jste')

test('__express', t => {
  global.window = {}
  const module = require('../index')
  delete global.window

  t.is(module, jste)
  t.false(module.hasOwnProperty('__express'))
})
