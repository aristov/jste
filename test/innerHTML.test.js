const test = require('ava')
const { body, div, span } = require('..')

test('null', t => {
  t.is(div({ innerHTML : null }).toString(), '<div></div>')
})

test('undefined', t => {
  t.is(div({ innerHTML : undefined }).toString(), '<div></div>')
})

test('boolean', t => {
  t.is(div({ innerHTML : true }).toString(), '<div></div>')
  t.is(div({ innerHTML : false }).toString(), '<div></div>')
})

test('number', t => {
  t.is(div({ innerHTML : 0 }).toString(), '<div>0</div>')
  t.is(div({ innerHTML : -0 }).toString(), '<div>0</div>')
  t.is(div({ innerHTML : 0n }).toString(), '<div>0</div>')
  t.is(div({ innerHTML : .5 }).toString(), '<div>0.5</div>')
  t.is(div({ innerHTML : -.5 }).toString(), '<div>-0.5</div>')
  t.is(div({ innerHTML : NaN }).toString(), '<div>NaN</div>')
  t.is(div({ innerHTML : Infinity }).toString(), '<div>Infinity</div>')
  t.is(div({ innerHTML : -Infinity }).toString(), '<div>-Infinity</div>')
})

test('string', t => {
  t.is(div({ innerHTML : 'test' }).toString(), '<div>test</div>')
  t.is(div({ innerHTML : '' }).toString(), '<div></div>')
  t.is(div({ innerHTML : `` }).toString(), '<div></div>')
})

test('html', t => {
  const result = div({
    innerHTML : '<span>content</span>',
  })
  t.is(result.toString(), '<div><span>content</span></div>')
})

test('array', t => {
  const result = body({
    innerHTML : [
      true,
      0,
      null,
      '<br>',
      div([
        Infinity,
        '<br>',
        [[[span(NaN)]]],
        '<br>',
        -Infinity,
      ]),
      '<br>',
      undefined,
      -0,
      false,
    ],
  })
  t.is(result.toString(), '<body>0<br><div>Infinity&lt;br&gt;<span>NaN</span>&lt;br&gt;-Infinity</div><br>0</body>')
})
