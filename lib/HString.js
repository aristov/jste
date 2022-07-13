const isVoidElement = require('./isVoidElement')

class HString extends String
{
  /**
   * @param {string} name
   * @param {string} [attrs]
   * @param {string} [content]
   */
  constructor(name, attrs, content) {
    const startTag = attrs ? `<${ name + attrs }>` : `<${ name }>`
    if(isVoidElement[name]) {
      super(startTag)
      return
    }
    if(content) {
      super(startTag + content + `</${ name }>`)
      return
    }
    super(startTag + `</${ name }>`)
  }
}

module.exports = HString
