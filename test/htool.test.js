const test = require('ava')
const h = require('..')

test('htool', t => {
  const result = h('div')

  t.is(result.toString(), '<div></div>')
})

test('no end tag', t => {
  const result = h('link')

  t.is(result.toString(), '<link>')
})

test('props', t => {
  const result = h('div', { id : '123' })

  t.is(result.toString(), '<div id="123"></div>')
})

test('children', t => {
  const result = h('div', h('span', 'test'))

  t.is(result.toString(), '<div><span>test</span></div>')
})

test('href', t => {
  const result = h('a', {
    href : 'http://example.com',
    children : 'Example',
  })

  t.is(result.toString(), '<a href="http://example.com">Example</a>')
})

test('hidden', t => {
  const result = h('div', {
    hidden : true,
    children : 'Test',
  })

  t.is(result.toString(), '<div hidden="">Test</div>')
})

test('defaultValue', t => {
  const result = h('input', {
    defaultValue : 'qwerty',
  })

  t.is(result.toString(), '<input value="qwerty">')
})

test('escape', t => {
  const result = h('div', {
    title : '"&',
    children : '<>&',
  })

  t.is(result.toString(), '<div title="&quot;&amp;">&lt;&gt;&amp;</div>')
})

test('innerHTML', t => {
  const result = h('div', { innerHTML : '<span>content</span>' })

  t.is(result.toString(), '<div><span>content</span></div>')
})

test('innerText', t => {
  const result = h('div', { innerText : 'foo\nbar' })

  t.is(result.toString(), '<div>foo<br>bar</div>')
})
