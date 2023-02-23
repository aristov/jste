const test = require('ava')
const { html, head, body, meta, title, link, script } = require('..')

test('simple', t => {
  const result = html({
    lang : 'en',
  })
  t.is(result.toString(), '<html lang="en"></html>')
})

test('complex', t => {
  const result = html({
    doctype : true,
    lang : 'en',
    children : [
      head([
        meta({ charset : 'utf-8' }),
        title('Hello JSTE!'),
        link({
          rel : 'stylesheet',
          href : '/bundle.css',
        })
      ]),
      body(
        script({ src : '/bundle.js' }),
      ),
    ],
  })
  t.is(result.toString(), '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Hello JSTE!</title><link rel="stylesheet" href="/bundle.css"></head><body><script src="/bundle.js"></script></body></html>')
})
