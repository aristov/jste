const Template = require('./Template')
const handlers = require('./handlers')
const attrNameMap = require('./attrNameMap')
const replace = require('./replace')
const children = handlers.children

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
  let prop, value, handler
  for(prop in props) {
    if(handler = handlers[prop]) {
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
    if(typeof value === 'string' && ATTR_RE.test(value)) {
      value = value.replace(ATTR_RE, replace)
    }
    attrs += `="${ value }"`
  }
  return new Template(name, attrs, handler?.(props[handler.__propName]))
}

module.exports = jste
