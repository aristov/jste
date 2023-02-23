const test = require('ava')
const { body, div, span } = require('..')

test('element', t => {
  const result = div(span('test'))

  t.is(result.toString(), '<div><span>test</span></div>')
})

test('null', t => {
  t.is(div(null).toString(), '<div></div>')
})

test('undefined', t => {
  t.is(div(undefined).toString(), '<div></div>')
})

test('boolean', t => {
  t.is(div(true).toString(), '<div></div>')
  t.is(div(false).toString(), '<div></div>')
})

test('number', t => {
  t.is(div(0).toString(), '<div>0</div>')
  t.is(div(-0).toString(), '<div>0</div>')
  t.is(div(0n).toString(), '<div>0</div>')
  t.is(div(.5).toString(), '<div>0.5</div>')
  t.is(div(-.5).toString(), '<div>-0.5</div>')
  t.is(div(NaN).toString(), '<div>NaN</div>')
  t.is(div(Infinity).toString(), '<div>Infinity</div>')
  t.is(div(-Infinity).toString(), '<div>-Infinity</div>')
})

test('string', t => {
  t.is(div('').toString(), '<div></div>')
  t.is(div(``).toString(), '<div></div>')
  t.is(div('test').toString(), '<div>test</div>')
  t.is(div('<span>test</span>').toString(), '<div>&lt;span&gt;test&lt;/span&gt;</div>')
})

test('array', t => {
  const result = body([
    true,
    [
      0,
      [
        null,
        [
          div([
            Infinity,
            '',
            [[[span(NaN)]]],
            ``,
            -Infinity,
          ]),
        ],
        undefined,
      ],
      -0,
    ],
    false,
  ])

  t.is(result.toString(), '<body>0<div>Infinity<span>NaN</span>-Infinity</div>0</body>')
})

test('xss', t => {
  const result = div({
    children : {
      toString() {
        return `<script>alert('Hacked!')</script>`
      }
    }
  })
  t.is(result.toString(), `<div>&lt;script&gt;alert('Hacked!')&lt;/script&gt;</div>`)
})
