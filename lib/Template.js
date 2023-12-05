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
const attrNameMap = {
  acceptCharset : 'accept-charset',
  accessKey : 'accesskey',
  allowFullScreen : 'allowfullscreen',
  className : 'class',
  colSpan : 'colspan',
  contentEditable : 'contenteditable',
  crossOrigin : 'crossorigin',
  dateTime : 'datetime',
  defaultChecked : 'checked',
  defaultMuted : 'muted',
  defaultSelected : 'selected',
  defaultValue : 'value',
  dirName : 'dirname',
  enterKeyHint : 'enterkeyhint',
  formAction : 'formaction',
  formEnctype : 'formenctype',
  formMethod : 'formmethod',
  formNoValidate : 'formnovalidate',
  formTarget : 'formtarget',
  htmlFor : 'for',
  httpEquiv : 'http-equiv',
  inputMode : 'inputmode',
  isMap : 'ismap',
  maxLength : 'maxlength',
  minLength : 'minlength',
  noModule : 'nomodule',
  noValidate : 'novalidate',
  readOnly : 'readonly',
  referrerPolicy : 'referrerpolicy',
  rowSpan : 'rowspan',
  tabIndex : 'tabindex',
  useMap : 'usemap',
}
const CAMEL_CASE_RE = /([a-z])([A-Z])/g
const ESCAPE_TEXT_RE = /[<>&]/g
const ESCAPE_ATTR_RE = /["&]/g
const LINE_BREAK_RE = /\n/g

class Template
{
  __props
  __tagName
  __attrs = ''
  __content = ''

  /**
   * @param {string} tagName
   * @param {{}|[]|string|*} [props]
   */
  constructor(tagName, props) {
    this.__tagName = tagName
    this.__props = props = props?.constructor === Object ?
      props :
      { children : props }
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
  }

  /**
   * @return {string}
   */
  toString() {
    const tagName = this.__tagName
    return voidElements[tagName] ?
      `<${ tagName + this.__attrs }>` :
      `<${ tagName + this.__attrs }>${ this.__content }</${ tagName }>`
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
   * @param {string|string[]} className
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
    this.__content = Template.#children(children)
  }

  /**
   * @param {string|string[]} innerHTML
   */
  innerHTML(innerHTML) {
    if(!filter(innerHTML)) {
      return
    }
    this.__content = Array.isArray(innerHTML) ?
      innerHTML.filter(filter).join('') :
      innerHTML
  }

  /**
   * @param {string|string[]} innerText
   */
  innerText(innerText) {
    if(!filter(innerText)) {
      return
    }
    if(Array.isArray(innerText)) {
      innerText = innerText.filter(filter).join('\n')
    }
    innerText = String(innerText)
    innerText = innerText.replace(ESCAPE_TEXT_RE, Template.#escape)
    this.__content = innerText.replace(LINE_BREAK_RE, '<br>')
  }

  /**
   * @param {string} prop
   * @param {string|*} value
   */
  #setAttr(prop, value) {
    const name = attrNameMap[prop] || prop
    if(value === true) {
      this.__attrs += ` ${ name }`
      return
    }
    value = String(value)
    value = value.replace(ESCAPE_ATTR_RE, Template.#escape)
    this.__attrs += ` ${ name }="${ value }"`
  }

  /**
   * @param {Template|string|*} children
   * @return {string}
   */
  static #children(children) {
    if(!filter(children)) {
      return ''
    }
    if(!Array.isArray(children)) {
      if(children instanceof Template) {
        return children
      }
      children = String(children)
      return children.replace(ESCAPE_TEXT_RE, Template.#escape)
    }
    let result = ''
    let child
    for(child of children) {
      result += Template.#children(child)
    }
    return result
  }

  /**
   * @param {string} char
   * @return {string}
   */
  static #escape(char) {
    return entities[char]
  }
}

module.exports = Template
