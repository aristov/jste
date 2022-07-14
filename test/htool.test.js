const test = require('ava')
const h = require('..')

test('jste', t => {
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

test('children 1', t => {
  const result = h('div', h('span', 'test'))

  t.is(result.toString(), '<div><span>test</span></div>')
})

test('children 2', t => {
  const result = h('div', null)

  t.is(result.toString(), '<div></div>')
})

test('href', t => {
  const result = h('a', {
    href : 'http://example.com',
    children : 'Example',
  })

  t.is(result.toString(), '<a href="http://example.com">Example</a>')
})

test('hidden: true', t => {
  const result = h('div', {
    hidden : true,
    children : 'Test',
  })

  t.is(result.toString(), '<div hidden>Test</div>')
})

test('hidden: false', t => {
  const result = h('div', {
    hidden : false,
    children : 'Test',
  })

  t.is(result.toString(), '<div>Test</div>')
})

test('defaultValue', t => {
  const result = h('input', {
    defaultValue : 'qwerty',
  })

  t.is(result.toString(), '<input value="qwerty">')
})

test('escaping strings', t => {
  const result = h('div', {
    title : '"&"',
    children : '<&>',
  })

  t.is(result.toString(), '<div title="&quot;&amp;&quot;">&lt;&amp;&gt;</div>')
})

test('innerHTML 1', t => {
  const result = h('div', {
    innerHTML : '<span>content</span>',
  })

  t.is(result.toString(), '<div><span>content</span></div>')
})

test('innerHTML 2', t => {
  const result = h('div', {
    innerHTML : null,
  })

  t.is(result.toString(), '<div></div>')
})

test('innerText 1', t => {
  const result = h('div', {
    innerText : 'foo\nbar',
  })

  t.is(result.toString(), '<div>foo<br>bar</div>')
})

test('innerText 2', t => {
  const result = h('div', {
    innerText : 'foo<br>bar',
  })

  t.is(result.toString(), '<div>foo&lt;br&gt;bar</div>')
})

test('innerText 3', t => {
  const result = h('div', {
    innerText : null,
  })

  t.is(result.toString(), '<div></div>')
})
