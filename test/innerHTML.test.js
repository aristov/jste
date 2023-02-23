const test = require('ava')
const jste = require('..')

test('html', t => {
  const result = jste('div', {
    innerHTML : '<span>content</span>',
  })

  t.is(result.toString(), '<div><span>content</span></div>')
})

test('null', t => {
  const result = jste('div', {
    innerHTML : null,
  })

  t.is(result.toString(), '<div></div>')
})

test('array', t => {
  const result = jste('ul', {
    innerHTML : [
      false,
      '<li>one</li>',
      null,
      '<li>two</li>',
      undefined,
      '<li>three</li>',
      NaN
    ],
  })

  t.is(result.toString(), '<ul><li>one</li><li>two</li><li>three</li></ul>')
})
