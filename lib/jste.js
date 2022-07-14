const JsTemplate = require('./JsTemplate')
const handlers = require('./handlers')
const attrNameMap = require('./attrNameMap')
const replace = require('./replace')
const children = handlers.children

const ATTR_RE = /["&]/g

/**
 * @param {string} name
 * @param {{}|[]|string|*} [props]
 * @return {JsTemplate}
 */
function jste(name, props) {
  if(!props) {
    return new JsTemplate(name)
  }
  if(props.constructor !== Object) {
    return new JsTemplate(name, null, children(props))
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
  return new JsTemplate(name, attrs, handler?.(props[handler.__propName]))
}

module.exports = jste
