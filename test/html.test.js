const test = require('ava')
const { html, head, body, base, meta, title, link, style, script } = require('..')

test('doctype', t => {
  const result = html({
    doctype : true,
    lang : 'en',
  })

  t.is(result.toString(), '<!doctype html><html lang="en"></html>')
})

test('complex', t => {
  const result = html({
    lang : 'en',
    children : [
      head([
        meta({ charset : 'UTF-8' }),
        title('JSTE example'),
        base({ href : 'https://example.com/' }),
        link({ rel : 'stylesheet', href : 'index.css' }),
        style('body{color:#AAA;}'),
      ]),
      body([
        script({ src : 'index.js' }),
      ]),
    ],
  })
  t.is(result.toString(), '<html lang="en"><head><meta charset="UTF-8"><title>JSTE example</title><base href="https://example.com/"><link rel="stylesheet" href="index.css"><style>body{color:#AAA;}</style></head><body><script src="index.js"></script></body></html>')
})
