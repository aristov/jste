const test = require('ava')
const { comment } = require('..')

test('comment', t => {
  const result = comment('This is a comment')

  t.is(result.toString(), '<!--This is a comment-->')
})
