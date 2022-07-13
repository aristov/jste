const HString = require('./HString')
const handlers = require('./handlers')
const attrNameMap = require('./attrNameMap')
const replace = require('./replace')

const ATTR_RE = /["&]/g

/**
 * @param {string} name
 * @param {{}} [props]
 * @return {string}
 */
function htool(name, props) {
  if(!props) {
    return new HString(name)
  }
  if(props.constructor !== Object) {
    return new HString(name, null, handlers.children(props))
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
  return new HString(name, attrs, handler?.(props[handler.__propName]))
}

module.exports = htool
