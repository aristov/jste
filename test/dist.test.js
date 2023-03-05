const test = require('ava')

test('jste.js', t => {
  const { div } = require('../dist/jste.js')
  const result = div('test')

  t.is(result.toString(), '<div>test</div>')
})

test('jste.min.js', t => {
  const { div } = require('../dist/jste.min.js')
  const result = div('test')

  t.is(result.toString(), '<div>test</div>')
})
