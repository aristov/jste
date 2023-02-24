const test = require('ava')
const { style } = require('..')

test('children', t => {
  const result = style('body > a { color: #0f0; }')

  t.is(result.toString(), '<style>body > a { color: #0f0; }</style>')
})
