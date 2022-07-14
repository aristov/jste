const replace = require('./replace')

const TEXT_RE = /[<>&]/g
const BR_RE = /\n/g

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
    if(typeof children === 'string') {
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
    if(TEXT_RE.test(innerText)) {
      innerText = innerText.replace(TEXT_RE, replace)
    }
    return BR_RE.test(innerText) ?
      innerText.replace(BR_RE, '<br>') :
      innerText
  },
}

Object.keys(handlers).forEach(key => handlers[key].__propName = key)

module.exports = handlers
