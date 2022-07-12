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
const symbol = Symbol()

/**
 * @param {string} name
 * @param {{}} [props]
 * @return {string}
 */
function htool(name, props) {
  let startTag = '<' + name
  let endTag = !noEndTag[name] && '</' + name + '>'
  let children
  let string
  if(props) {
    if(props.constructor === Object) {
      let prop, attr, value
      for(prop in props) {
        attr = attrNameMap[prop] || prop
        value = props[prop]
        if(value === null) {
          continue
        }
        if(value === true) {
          value = ''
        }
        else value = String(value).replace(ATTR_RE, replace)
        if(prop !== 'children') {
          startTag += ' ' + attr + '="' + value + '"'
        }
      }
      children = content(props.children)
    }
    else children = content(props)
  }
  else children = ''
  startTag += '>'
  string = new String(endTag ? startTag + children + endTag : startTag)
  string[symbol] = true
  return string
}

/**
 * @param {*} children
 * @return {string}
 */
function content(children) {
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
    html += content(child)
  }
  return html
}


module.exports = htool
