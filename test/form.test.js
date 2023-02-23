const test = require('ava')
const { form, label, input, button } = require('..')

test('complex', t => {
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
  t.is(result.toString(), '<form action="https://google.com/search" target="_blank"><label>Search <input type="search" name="q"></label><button>Find</button></form>')
})
