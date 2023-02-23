const test = require('ava')
const jste = require('..')

test('style: string', t => {
  const result = jste('div', {
    style : 'display:flex;font-size:2em;',
  })

  t.is(result.toString(), '<div style="display:flex;font-size:2em;"></div>')
})

test('style: object', t => {
  const result = jste('div', {
    style : {
      display : 'grid',
      gridTemplateColumns : 'auto 1fr auto',
      gridGap : '1em',
    },
  })

  t.is(result.toString(), '<div style="display:grid;grid-template-columns:auto 1fr auto;grid-gap:1em;"></div>')
})

test('className: string', t => {
  const result = jste('div', {
    className : 'foo bar baz',
  })

  t.is(result.toString(), '<div class="foo bar baz"></div>')
})

test('className: array', t => {
  const result = jste('div', {
    className : [false, 'foo', null, 'bar', undefined, 'baz', '', 'bat', 0, 'xyz', NaN],
  })

  t.is(result.toString(), '<div class="foo bar baz bat xyz"></div>')
})
