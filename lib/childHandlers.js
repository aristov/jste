const replace = require('./replace')

const TEXT_RE = /[<>&]/g
const BR_RE = /\n/g

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
      if(TEXT_RE.test(children)) {
        return children.replace(TEXT_RE, replace)
      }
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
      innerHTML
  },

  /**
   * @param {string|string[]} innerText
   * @return {string}
   */
  innerText(innerText) {
    if(Array.isArray(innerText)) {
      innerText = innerText.filter(Boolean).join('\n')
    }
    if(TEXT_RE.test(innerText)) {
      innerText = innerText.replace(TEXT_RE, replace)
    }
    return BR_RE.test(innerText) ?
      innerText.replace(BR_RE, '<br>') :
      innerText
  },
}

module.exports = childHandlers
