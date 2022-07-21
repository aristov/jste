const test = require('ava')
const jste = require('..')

test('jste', t => {
  const result = jste('div')

  t.is(result.toString(), '<div></div>')
})

test('no end tag', t => {
  const result = jste('link')

  t.is(result.toString(), '<link>')
})

test('props', t => {
  const result = jste('div', { id : '123' })

  t.is(result.toString(), '<div id="123"></div>')
})

test('children 1', t => {
  const result = jste('div', jste('span', 'test'))

  t.is(result.toString(), '<div><span>test</span></div>')
})

test('children 2', t => {
  const result = jste('div', null)

  t.is(result.toString(), '<div></div>')
})

test('href', t => {
  const result = jste('a', {
    children : 'Example',
    href : 'http://example.com',
  })

  t.is(result.toString(), '<a href="http://example.com">Example</a>')
})

test('hidden: true', t => {
  const result = jste('div', {
    hidden : true,
    children : 'Test',
  })

  t.is(result.toString(), '<div hidden>Test</div>')
})

test('hidden: false', t => {
  const result = jste('div', {
    hidden : false,
    children : 'Test',
  })

  t.is(result.toString(), '<div>Test</div>')
})

test('defaultValue', t => {
  const result = jste('input', {
    defaultValue : 'qwerty',
  })

  t.is(result.toString(), '<input value="qwerty">')
})

test('escaping strings', t => {
  const result = jste('div', {
    title : '"&"',
    children : '<&>',
  })

  t.is(result.toString(), '<div title="&quot;&amp;&quot;">&lt;&amp;&gt;</div>')
})

test('innerHTML 1', t => {
  const result = jste('div', {
    innerHTML : '<span>content</span>',
  })

  t.is(result.toString(), '<div><span>content</span></div>')
})

test('innerHTML 2', t => {
  const result = jste('div', {
    innerHTML : null,
  })

  t.is(result.toString(), '<div></div>')
})

test('innerText 1', t => {
  const result = jste('div', {
    innerText : 'foo\nbar',
  })

  t.is(result.toString(), '<div>foo<br>bar</div>')
})

test('innerText 2', t => {
  const result = jste('div', {
    innerText : 'foo<br>bar',
  })

  t.is(result.toString(), '<div>foo&lt;br&gt;bar</div>')
})

test('innerText 3', t => {
  const result = jste('div', {
    innerText : null,
  })

  t.is(result.toString(), '<div></div>')
})
