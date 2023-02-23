const test = require('ava')
const { div } = require('..')

test('null', t => {
  t.is(div({ innerText : null }).toString(), '<div></div>')
})

test('undefined', t => {
  t.is(div({ innerText : undefined }).toString(), '<div></div>')
})

test('boolean', t => {
  t.is(div({ innerText : true }).toString(), '<div></div>')
  t.is(div({ innerText : false }).toString(), '<div></div>')
})

test('number', t => {
  t.is(div({ innerText : 0 }).toString(), '<div>0</div>')
  t.is(div({ innerText : -0 }).toString(), '<div>0</div>')
  t.is(div({ innerText : 0n }).toString(), '<div>0</div>')
  t.is(div({ innerText : .5 }).toString(), '<div>0.5</div>')
  t.is(div({ innerText : -.5 }).toString(), '<div>-0.5</div>')
  t.is(div({ innerText : NaN }).toString(), '<div>NaN</div>')
  t.is(div({ innerText : Infinity }).toString(), '<div>Infinity</div>')
  t.is(div({ innerText : -Infinity }).toString(), '<div>-Infinity</div>')
})

test('string', t => {
  t.is(div({ innerText : 'foo\nbar' }).toString(), '<div>foo<br>bar</div>')
  t.is(div({ innerText : '' }).toString(), '<div></div>')
  t.is(div({ innerText : `` }).toString(), '<div></div>')
})

test('html', t => {
  const result = div({
    innerText : 'foo<br>bar',
  })

  t.is(result.toString(), '<div>foo&lt;br&gt;bar</div>')
})

test('array', t => {
  const result = div({
    innerText : [
      'foo',
      'bar',
      'bat',
      'baz',
    ],
  })
  t.is(result.toString(), '<div>foo<br>bar<br>bat<br>baz</div>')
})

test('array empty', t => {
  const result = div({
    innerText : [
      null,
      true,
      false,
      undefined,
    ],
  })
  t.is(result.toString(), '<div></div>')
})
