const test = require('ava')
const { fragment, div } = require('..')

test('fragment + children', t => {
  const result = div(
    fragment([
      div('One'),
      'Two',
      div('Three'),
    ]),
  )

  t.is(result.toString(), '<div><div>One</div>Two<div>Three</div></div>')
})

test('fragment + innerHTML', t => {
  const result = div(
    fragment({
      innerHTML : '<div>One</div>Two<div>Three</div>',
    }),
  )

  t.is(result.toString(), '<div><div>One</div>Two<div>Three</div></div>')
})
