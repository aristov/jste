const test = require('ava')
const h = require('..')

test('htool', t => {
  const html = h('div')

  t.is(html, '<div></div>')
})

test('no end tag', t => {
  const html = h('link')

  t.is(html, '<link>')
})

test('props', t => {
  const html = h('div', { id : '123' })

  t.is(html, '<div id="123"></div>')
})

test('children', t => {
  const html = h('div', h('span', 'test'))

  t.is(html, '<div><span>test</span></div>')
})

test('href', t => {
  const html = h('a', {
    href : 'http://example.com',
    children : 'Example',
  })

  t.is(html, '<a href="http://example.com">Example</a>')
})

test('hidden', t => {
  const html = h('div', {
    hidden : true,
    children : 'Test'
  })

  t.is(html, '<div hidden="">Test</div>')
})

test('defaultValue', t => {
  const html = h('input', {
    defaultValue : 'qwerty'
  })

  t.is(html, '<input value="qwerty">')
})
