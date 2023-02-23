const test = require('ava')
const { table, caption, thead, tbody, tr, th, td } = require('..')

test('complex', t => {
  const result = table([
    caption('Capitals'),
    thead(tr([th('Country'), th('Capital')])),
    tbody([
      tr([td('USA'), td('Washington')]),
      tr([td('UK'), td('London')]),
      tr([td('Netherlands'), td('Amsterdam')]),
    ]),
  ])

  t.is(result.toString(), '<table><caption>Capitals</caption><thead><tr><th>Country</th><th>Capital</th></tr></thead><tbody><tr><td>USA</td><td>Washington</td></tr><tr><td>UK</td><td>London</td></tr><tr><td>Netherlands</td><td>Amsterdam</td></tr></tbody></table>')
})
