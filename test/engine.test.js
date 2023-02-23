const path = require('path')
const util = require('util')
const test = require('ava')
const engine = require('../engine')

const engineAsync = util.promisify(engine)
const filePath = path.join(__dirname, 'test.jste')

test('test', async t => {
  const params = {
    lang : 'en',
    title : 'Example',
    src : '/dist/jste.js',
  }
  const result = await engineAsync(filePath, params)
  t.is(result, '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Example</title></head><body><script src="/dist/jste.js"></script></body></html>')
})

test('cache', async t => {
  const params = {
    lang : 'ru',
    title : 'Тест',
    src : '/dist/jste.min.js',
    cache : true,
  }
  const result = await engineAsync(filePath, params)
  t.is(result, '<!doctype html><html lang="ru"><head><meta charset="utf-8"><title>Тест</title></head><body><script src="/dist/jste.min.js"></script></body></html>')
})

test('error', async t => {
  const params = null
  const error = await t.throwsAsync(engineAsync(filePath, params))
  t.is(error.name, 'TypeError')
  t.is(error.message, `Cannot read properties of null (reading 'lang')`)
})
