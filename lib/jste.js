const Template = require('./Template')
const childHandlers = require('./childHandlers')
const attrHandlers = require('./attrHandlers')
const attrNameMap = require('./attrNameMap')
const replace = require('./replace')
const children = childHandlers.children

const ATTR_RE = /["&]/g

/**
 * @param {string} name
 * @param {{}|[]|string|*} [props]
 * @return {Template}
 */
function jste(name, props) {
  if(!props) {
    return new Template(name)
  }
  if(props.constructor !== Object) {
    return new Template(name, null, children(props))
  }
  let attrs = ''
  let prop, value, childHandler, childProp, content
  for(prop in props) {
    if(childHandlers[prop]) {
      childHandler = childHandlers[prop]
      childProp = prop
      continue
    }
    value = props[prop]
    if(value === null || value === false) {
      continue
    }
    attrs += ' ' + (attrNameMap[prop] || prop)
    if(value === true) {
      continue
    }
    if(attrHandlers[prop]) {
      value = attrHandlers[prop](value)
    }
    if(typeof value === 'string' && ATTR_RE.test(value)) {
      value = value.replace(ATTR_RE, replace)
    }
    attrs += `="${ value }"`
  }
  if(childHandler) {
    content = childHandler(props[childProp])
  }
  return new Template(name, attrs, content)
}

module.exports = jste
