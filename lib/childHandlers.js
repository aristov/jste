const Template = require('./Template')
const LINE_BREAK_RE = /\n/g

const childHandlers = {
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
        content += childHandlers.children(child)
      }
      return content
    }
    if(typeof children === 'string') {
      return Template.escapeTextContent(children)
    }
    return children
  },

  /**
   * @param {string|string[]} innerHTML
   * @return {string}
   */
  innerHTML(innerHTML) {
    return Array.isArray(innerHTML) ?
      innerHTML.filter(Boolean).join('') :
      innerHTML || ''
  },

  /**
   * @param {string|string[]} innerText
   * @return {string}
   */
  innerText(innerText) {
    if(!innerText) {
      return innerText || ''
    }
    if(Array.isArray(innerText)) {
      innerText = innerText.filter(Boolean).join('\n')
    }
    innerText = Template.escapeTextContent(innerText)
    innerText = innerText.replace(LINE_BREAK_RE, '<br>')
    return innerText || ''
  },
}

module.exports = childHandlers
