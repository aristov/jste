const attrNameMap = require('./attrNameMap')
const noEndTag = require('./noEndTag')
const content = require('./content')

/**
 * @param {string} name
 * @param {{}} [props]
 * @return {string}
 */
function htool(name, props) {
  let html = '<' + name
  let endTag = !noEndTag[name] && '</' + name + '>'
  if(!props) {
    html += '>'
    return endTag ? html + endTag : html
  }
  if(props.constructor !== Object) {
    html += '>'
    return endTag ? html + content(props) + endTag : html
  }
  let prop, attr, value
  for(prop in props) {
    attr = attrNameMap[prop] || prop
    value = props[prop]
    if(prop !== 'children' && value !== null) {
      html += ' ' + attr + '="' + (value === true ? '"' : value + '"')
    }
  }
  html += '>'
  return endTag ? html + content(props.children) + endTag : html
}

module.exports = htool
