const jste = require('./jste')

/**
 * @param {{}|[]|string|*} [props]
 * @return {string}
 */
module.exports = props => {
  if(props?.constructor !== Object) {
    return jste('html', props)
  }
  const { doctype, ...rest } = props
  const result = jste('html', rest)
  if(doctype) {
    result.html = '<!doctype html>' + result.html
  }
  return result
}
