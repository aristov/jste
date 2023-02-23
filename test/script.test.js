const test = require('ava')
const { script } = require('..')

test('text', t => {
  const result = script({
    text : 'console.log(a < b && b > a)'
  })

  t.is(result.toString(), '<script>console.log(a < b && b > a)</script>')
})

test('children', t => {
  const result = script('console.log(a < b && b > a)')

  t.is(result.toString(), '<script>console.log(a < b && b > a)</script>')
})
