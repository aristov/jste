const test = require('ava')
const h = require('..')

const { form, label, input, button } = h
const { html, head, body, base, meta, title, link, style, script } = h
const { table, caption, thead, tbody, tr, th, td } = h

test('htool', t => {
  const result = h('div', {
    id : 'foo',
    tabIndex : 0,
    children : h('span', {
      className : 'bar',
      children : 'Hello DomB!',
    }),
  })
  t.is(result, '<div id="foo" tabindex="0"><span class="bar">Hello DomB!</span></div>')
})

test('form', t => {
  const result = form({
    action : 'https://google.com/search',
    target : '_blank',
    children : [
      label([
        'Search ',
        input({ type : 'search', name : 'q' }),
      ]),
      button('Find'),
    ],
  })
  t.is(result, '<form action="https://google.com/search" target="_blank"><label>Search <input type="search" name="q"></label><button>Find</button></form>')
})

test('html', t => {
  const result = html({
    lang : 'en',
    children : [
      head([
        meta({ charset : 'UTF-8' }),
        title('DomB example'),
        base({ href : 'https://example.com/' }),
        [
          link({ rel : 'stylesheet', href : 'index.css' }),
          style('body{color:#AAA;}'),
        ],
      ]),
      body([
        script({ src : 'index.js' }),
      ]),
    ],
  })
  t.is(result, '<html lang="en"><head><meta charset="UTF-8"><title>DomB example</title><base href="https://example.com/"><link rel="stylesheet" href="index.css"><style>body{color:#AAA;}</style></head><body><script src="index.js"></script></body></html>')
})

test('table', t => {
  const result = table([
    caption('Capitals'),
    thead(tr([th('Country'), th('Capital')])),
    tbody([
      tr([td('USA'), td('Washington')]),
      tr([td('UK'), td('London')]),
      tr([td('Netherlands'), td('Amsterdam')]),
    ]),
  ])
  t.is(result, '<table><caption>Capitals</caption><thead><tr><th>Country</th><th>Capital</th></tr></thead><tbody><tr><td>USA</td><td>Washington</td></tr><tr><td>UK</td><td>London</td></tr><tr><td>Netherlands</td><td>Amsterdam</td></tr></tbody></table>')
})
