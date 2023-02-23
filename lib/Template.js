const ESCAPE_TEXT_RE = /[<>&]/g
const ESCAPE_ATTR_RE = /["&]/g
const entities = {
  '&' : '&amp;',
  '<' : '&lt;',
  '>' : '&gt;',
  '"' : '&quot;',
}
const voidElements = {
  area : true,
  base : true,
  br : true,
  col : true,
  embed : true,
  hr : true,
  img : true,
  input : true,
  link : true,
  meta : true,
  source : true,
  track : true,
  wbr : true,
}

class Template
{
  /**
   * @param {string} tagName
   * @param {string} [attrs='']
   * @param {string} [content]
   */
  constructor(tagName, attrs = '', content = '') {
    this.html = `<${ tagName + attrs }>`
    if(!voidElements[tagName]) {
      this.html += content + `</${ tagName }>`
    }
  }

  /**
   * @return {string}
   */
  toString() {
    return this.html
  }

  /**
   * @param {string} char
   * @return {string}
   */
  static escape(char) {
    return entities[char]
  }

  /**
   * @param {string} content
   * @return {string}
   */
  static escapeTextContent(content) {
    return content.replace(ESCAPE_TEXT_RE, Template.escape)
  }

  /**
   * @param {string} value
   * @return {string}
   */
  static escapeAttrValue(value) {
    return value.replace(ESCAPE_ATTR_RE, Template.escape)
  }
}

module.exports = Template
