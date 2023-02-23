const attrNameMap = require('./attrNameMap')

const toString = Object.prototype.toString
const filter = value => {
  return !skipTypes[toString.call(value)]
}
const replace = (_, az, AZ) => {
  return az + '-' + AZ.toLowerCase()
}
const skipTypes = {
  '[object Undefined]' : true,
  '[object Boolean]' : true,
  '[object Null]' : true,
}
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
const CAMEL_CASE_RE = /([a-z])([A-Z])/g
const ESCAPE_TEXT_RE = /[<>&]/g
const ESCAPE_ATTR_RE = /["&]/g
const LINE_BREAK_RE = /\n/g

class Template
{
  __props
  #tagName
  #attrs = ''
  #content = ''

  /**
   * @param {string} tagName
   * @param {{}|[]|string|*} [props]
   */
  constructor(tagName, props) {
    this.#tagName = tagName
    this.__props = props?.constructor === Object ?
      props :
      { children : props }
  }

  /**
   * @return {string}
   */
  toString() {
    const props = this.__props
    const tagName = this.#tagName
    let prop, value
    for(prop in props) {
      value = props[prop]
      if(value === null || value === false) {
        continue
      }
      if(this[prop]) {
        this[prop](value)
      }
      else this.#setAttr(prop, value)
    }
    return voidElements[tagName] ?
      `<${ tagName + this.#attrs }>` :
      `<${ tagName + this.#attrs }>${ this.#content }</${ tagName }>`
  }

  /**
   * @param {string} prop
   * @param {string|*} value
   */
  #setAttr(prop, value) {
    const name = attrNameMap[prop] || prop
    if(value === true) {
      this.#attrs += ` ${ name }`
      return
    }
    value = Template.escapeAttrValue(value)
    this.#attrs += ` ${ name }="${ value }"`
  }

  /**
   * @param {string|{}} style
   */
  style(style) {
    if(typeof style === 'string') {
      this.#setAttr('style', style)
      return
    }
    let value = ''
    let prop, name
    for(prop in style) {
      name = prop.replace(CAMEL_CASE_RE, replace)
      value += `${ name }:${ style[prop] };`
    }
    this.#setAttr('style', value)
  }

  /**
   * @param {string|[]} className
   */
  className(className) {
    const value = Array.isArray(className) ?
      className.filter(Boolean).join(' ') :
      className
    this.#setAttr('class', value)
  }

  /**
   * @param {*} children
   */
  children(children) {
    this.#content = Template.children(children)
  }

  /**
   * @param {string|[]} innerHTML
   */
  innerHTML(innerHTML) {
    if(!filter(innerHTML)) {
      return
    }
    this.#content = Array.isArray(innerHTML) ?
      innerHTML.filter(filter).join('') :
      innerHTML
  }

  /**
   * @param {string|[]} innerText
   */
  innerText(innerText) {
    if(!filter(innerText)) {
      return
    }
    if(Array.isArray(innerText)) {
      innerText = innerText.filter(filter).join('\n')
    }
    innerText = Template.escapeTextContent(innerText)
    this.#content = innerText.replace(LINE_BREAK_RE, '<br>')
  }

  /**
   * @param {string} char
   * @return {string}
   */
  static #escape(char) {
    return entities[char]
  }

  /**
   * @param {string|*} content
   * @return {string}
   */
  static escapeTextContent(content) {
    return String(content).replace(ESCAPE_TEXT_RE, Template.#escape)
  }

  /**
   * @param {string} value
   * @return {string}
   */
  static escapeAttrValue(value) {
    return String(value).replace(ESCAPE_ATTR_RE, Template.#escape)
  }

  /**
   * @param {Template|string|*} children
   * @return {string}
   */
  static children(children) {
    if(!filter(children)) {
      return ''
    }
    if(!Array.isArray(children)) {
      return children instanceof Template ?
        children :
        Template.escapeTextContent(children)
    }
    let content = ''
    let child
    for(child of children) {
      content += Template.children(child)
    }
    return content
  }
}

module.exports = Template
