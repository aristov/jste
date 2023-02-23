const Template = require('./Template')

/**
 * @param {{}|[]|string|*} [props]
 * @return {string}
 */
module.exports = props => {
  if(props?.constructor !== Object) {
    return Template.render('html', props)
  }
  const { doctype, ...rest } = props
  const result = Template.render('html', rest)
  if(doctype) {
    result.toString = function() {
      return '<!doctype html>' + Template.prototype.toString.call(this)
    }
  }
  return result
}
