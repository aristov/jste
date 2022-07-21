const isVoidElement = require('./isVoidElement')

class Template
{
  /**
   * @param {string} name
   * @param {string} [attrs]
   * @param {string} [content]
   */
  constructor(name, attrs, content) {
    const startTag = attrs ? `<${ name + attrs }>` : `<${ name }>`
    if(isVoidElement[name]) {
      this.html = startTag
      return
    }
    this.html = content ?
      startTag + content + `</${ name }>` :
      startTag + `</${ name }>`
  }

  /**
   * @return {string}
   */
  toString() {
    return this.html
  }
}

module.exports = Template
