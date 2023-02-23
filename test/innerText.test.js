const test = require('ava')
const jste = require('..')

test('string', t => {
  const result = jste('div', {
    innerText : 'foo\nbar',
  })

  t.is(result.toString(), '<div>foo<br>bar</div>')
})

test('html', t => {
  const result = jste('div', {
    innerText : 'foo<br>bar',
  })

  t.is(result.toString(), '<div>foo&lt;br&gt;bar</div>')
})

test('array', t => {
  const result = jste('div', {
    innerText : [false, 'foo', null, 'bar', undefined, 'baz', NaN],
  })

  t.is(result.toString(), '<div>foo<br>bar<br>baz</div>')
})

test('null', t => {
  const result = jste('div', {
    innerText : null,
  })

  t.is(result.toString(), '<div></div>')
})
