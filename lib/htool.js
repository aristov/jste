const attrNameMap = require('./attrNameMap')
const noEndTag = require('./noEndTag')

const rt = {
  '"' : '&quot;',
  '&' : '&amp;',
  '<' : '&lt;',
  '>' : '&gt;',
}
const replace = c => rt[c]
const ATTR_RE = /["&]/g
const TEXT_RE = /[<>&]/g
const BR_RE = /\n/g
const symbol = Symbol()

/**
 * @param {string} name
 * @param {{}} [props]
 * @return {string}
 */
function htool(name, props) {
  let startTag = '<' + name
  let endTag = !noEndTag[name] && '</' + name + '>'
  let html
  let string
  if(props) {
    let handler
    if(props.constructor === Object) {
      let prop, attr, value
      for(prop in props) {
        if(handler = handlers[prop]) {
          continue
        }
        attr = attrNameMap[prop] || prop
        value = props[prop]
        if(value === null || value === false) {
          continue
        }
        if(value === true) {
          value = ''
        }
        else value = String(value).replace(ATTR_RE, replace)
        startTag += ' ' + attr + '="' + value + '"'
      }
      html = handler?.(props[handler.__propName]) || ''
    }
    else html = handlers.children(props)
  }
  else html = ''
  startTag += '>'
  string = new String(endTag ? startTag + html + endTag : startTag)
  string[symbol] = true
  return string
}

const handlers = {
  /**
   * @param {*} children
   * @return {string}
   */
  children(children) {
    if(!children) {
      return ''
    }
    if(!Array.isArray(children)) {
      return typeof children !== 'string' || children[symbol] ?
        children :
        children.replace(TEXT_RE, replace)
    }
    let html = ''
    let child
    for(child of children) {
      html += handlers.children(child)
    }
    return html
  },
  /**
   * @param {string} innerHTML
   * @return {string}
   */
  innerHTML(innerHTML) {
    return innerHTML
  },
  /**
   * @param {string} innerText
   * @return {string}
   */
  innerText(innerText) {
    return innerText.replace(BR_RE, '<br>')
  },
}

Object.keys(handlers).forEach(key => handlers[key].__propName = key)

module.exports = htool
