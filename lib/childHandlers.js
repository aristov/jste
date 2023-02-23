const Template = require('./Template')
const LINE_BREAK_RE = /\n/g
const toString = Object.prototype.toString
const skipTypes = {
  '[object Boolean]' : true,
  '[object Undefined]' : true,
  '[object Null]' : true,
}
const filter = value => {
  return !skipTypes[toString.call(value)]
}

const childHandlers = {
  /**
   * @param {*} children
   * @return {string}
   */
  children(children) {
    if(!filter(children)) {
      return ''
    }
    if(Array.isArray(children)) {
      let content = ''
      let child
      for(child of children) {
        content += childHandlers.children(child)
      }
      return content
    }
    return typeof children === 'string' ?
      Template.escapeTextContent(children) :
      children
  },

  /**
   * @param {string|string[]} innerHTML
   * @return {string}
   */
  innerHTML(innerHTML) {
    if(!filter(innerHTML)) {
      return ''
    }
    return Array.isArray(innerHTML) ?
      innerHTML.filter(filter).join('') :
      innerHTML
  },

  /**
   * @param {string|string[]} innerText
   * @return {string}
   */
  innerText(innerText) {
    if(!filter(innerText)) {
      return ''
    }
    if(Array.isArray(innerText)) {
      innerText = innerText.filter(filter).join('\n')
    }
    if(typeof innerText === 'string') {
      innerText = Template.escapeTextContent(innerText)
      return innerText.replace(LINE_BREAK_RE, '<br>')
    }
    return innerText
  },
}

module.exports = childHandlers
