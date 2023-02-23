const test = require('ava')
const jste = require('..')

test('jste', t => {
  const result = jste('div')

  t.is(result.toString(), '<div></div>')
})

test('voidElements', t => {
  const result = jste('link')

  t.is(result.toString(), '<link>')
})

test('props', t => {
  const result = jste('div', { id : '123' })

  t.is(result.toString(), '<div id="123"></div>')
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

test('escape', t => {
  const result = jste('div', {
    title : '<"&">',
    children : '<"&">',
  })

  t.is(result.toString(), '<div title="<&quot;&amp;&quot;>">&lt;"&amp;"&gt;</div>')
})

test('complex', t => {
  const result = jste('div', {
    id : 'foo',
    tabIndex : 0,
    children : jste('span', {
      className : 'bar',
      children : 'Hello JSTE!',
    }),
  })

  t.is(result.toString(), '<div id="foo" tabindex="0"><span class="bar">Hello JSTE!</span></div>')
})

test('xss', t => {
  const result = jste('div', {
    id : {
      toString() {
        return `"><script>alert('Hacked!')</script>`
      }
    }
  })

  t.is(result.toString(), `<div id="&quot;><script>alert('Hacked!')</script>"></div>`)
})
