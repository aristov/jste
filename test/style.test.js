const test = require('ava')
const jste = require('..')

test('string', t => {
  const result = jste('div', {
    style : 'display:flex;font-size:2em;',
  })

  t.is(result.toString(), '<div style="display:flex;font-size:2em;"></div>')
})

test('object', t => {
  const result = jste('div', {
    style : {
      display : 'grid',
      gridTemplateColumns : 'auto 1fr auto',
      gridGap : '1em',
    },
  })

  t.is(result.toString(), '<div style="display:grid;grid-template-columns:auto 1fr auto;grid-gap:1em;"></div>')
})
