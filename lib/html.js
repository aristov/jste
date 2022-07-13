const htool = require('./htool')

/**
 * @param {{}|[]|string|*} [props]
 * @return {string}
 */
module.exports = props => {
  if(props?.constructor !== Object) {
    return htool('html', props)
  }
  const { doctype, ...rest } = props
  const result = htool('html', rest)
  return doctype ? '<!doctype html>' + result : result
}
