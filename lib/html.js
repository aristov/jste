const htool = require('./htool')

module.exports = props => {
  if(props?.constructor !== Object) {
    return htool('html', props)
  }
  const { doctype, ...rest } = props
  const result = htool('html', rest)
  return doctype ? '<!doctype html>' + result : result
}
