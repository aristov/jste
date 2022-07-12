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
  let content = ''
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
        startTag += ' ' + attr + '="'
        if(value === true) {
          startTag += '"'
          continue
        }
        if(typeof value === 'string' && ATTR_RE.test(value)) {
          value = value.replace(ATTR_RE, replace)
        }
        startTag += value + '"'
      }
      if(endTag && handler) {
        content = handler(props[handler.__propName])
      }
    }
    else if(endTag) {
      content = handlers.children(props)
    }
  }
  startTag += '>'
  string = new String(endTag ? startTag + content + endTag : startTag)
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
    if(Array.isArray(children)) {
      let content = ''
      let child
      for(child of children) {
        content += handlers.children(child)
      }
      return content
    }
    if(typeof children === 'string' && !children[symbol]) {
      if(TEXT_RE.test(children)) {
        return children.replace(TEXT_RE, replace)
      }
    }
    return children
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
    return BR_RE.test(innerText) ?
      innerText.replace(BR_RE, '<br>') :
      innerText
  },
}

Object.keys(handlers).forEach(key => handlers[key].__propName = key)

module.exports = htool
