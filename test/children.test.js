const test = require('ava')
const jste = require('..')
const { div, span, hr } = jste

test('element', t => {
  const result = div(span('test'))

  t.is(result.toString(), '<div><span>test</span></div>')
})

test('null', t => {
  const result = div(null)

  t.is(result.toString(), '<div></div>')
})

test('array', t => {
  const result = div([
    'foo',
    [
      undefined,
      [
        null,
        [
          0,
          [
            0n,
            span([
              'bar',
              [[[hr()]]],
              'bat',
            ]),
            NaN,
          ],
          -0,
        ],
        false,
      ],
      '',
    ],
    'baz',
  ])

  t.is(result.toString(), '<div>foo<span>bar<hr>bat</span>baz</div>')
})
