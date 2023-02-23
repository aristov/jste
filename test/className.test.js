const test = require('ava')
const jste = require('../index')

test('string', t => {
  const result = jste('div', {
    className : 'foo bar baz',
  })

  t.is(result.toString(), '<div class="foo bar baz"></div>')
})

test('array', t => {
  const result = jste('div', {
    className : [false, 'foo', null, 'bar', undefined, 'baz', '', 'bat', 0, 'xyz', NaN],
  })

  t.is(result.toString(), '<div class="foo bar baz bat xyz"></div>')
})
