(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jste"] = factory();
	else
		root["jste"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * @module jste
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
module.exports = __webpack_require__(1)

if(typeof process !== 'undefined') {
  module.exports.__express = eval('require("./engine")')
}


/***/ }),
/* 1 */
/***/ ((module, exports, __webpack_require__) => {

const jste = __webpack_require__(2)

exports = module.exports = jste

exports.a = props => jste('a', props)
exports.abbr = props => jste('abbr', props)
exports.address = props => jste('address', props)
exports.area = props => jste('area', props)
exports.article = props => jste('article', props)
exports.aside = props => jste('aside', props)
exports.audio = props => jste('audio', props)
exports.b = props => jste('b', props)
exports.base = props => jste('base', props)
exports.bdi = props => jste('bdi', props)
exports.bdo = props => jste('bdo', props)
exports.blockquote = props => jste('blockquote', props)
exports.body = props => jste('body', props)
exports.br = props => jste('br', props)
exports.button = props => jste('button', props)
exports.canvas = props => jste('canvas', props)
exports.caption = props => jste('caption', props)
exports.cite = props => jste('cite', props)
exports.code = props => jste('code', props)
exports.col = props => jste('col', props)
exports.colgroup = props => jste('colgroup', props)
exports.data = props => jste('data', props)
exports.datalist = props => jste('datalist', props)
exports.dd = props => jste('dd', props)
exports.del = props => jste('del', props)
exports.details = props => jste('details', props)
exports.dfn = props => jste('dfn', props)
exports.dialog = props => jste('dialog', props)
exports.div = props => jste('div', props)
exports.dl = props => jste('dl', props)
exports.dt = props => jste('dt', props)
exports.em = props => jste('em', props)
exports.embed = props => jste('embed', props)
exports.fieldset = props => jste('fieldset', props)
exports.figcaption = props => jste('figcaption', props)
exports.figure = props => jste('figure', props)
exports.footer = props => jste('footer', props)
exports.form = props => jste('form', props)
exports.h1 = props => jste('h1', props)
exports.h2 = props => jste('h2', props)
exports.h3 = props => jste('h3', props)
exports.h4 = props => jste('h4', props)
exports.h5 = props => jste('h5', props)
exports.h6 = props => jste('h6', props)
exports.head = props => jste('head', props)
exports.header = props => jste('header', props)
exports.hgroup = props => jste('hgroup', props)
exports.hr = props => jste('hr', props)
exports.html = __webpack_require__(8)
exports.i = props => jste('i', props)
exports.iframe = props => jste('iframe', props)
exports.img = props => jste('img', props)
exports.input = props => jste('input', props)
exports.ins = props => jste('ins', props)
exports.kbd = props => jste('kbd', props)
exports.label = props => jste('label', props)
exports.legend = props => jste('legend', props)
exports.li = props => jste('li', props)
exports.link = props => jste('link', props)
exports.main = props => jste('main', props)
exports.map = props => jste('map', props)
exports.mark = props => jste('mark', props)
exports.menu = props => jste('menu', props)
exports.meta = props => jste('meta', props)
exports.meter = props => jste('meter', props)
exports.nav = props => jste('nav', props)
exports.noscript = props => jste('noscript', props)
exports.object = props => jste('object', props)
exports.ol = props => jste('ol', props)
exports.optgroup = props => jste('optgroup', props)
exports.option = props => jste('option', props)
exports.output = props => jste('output', props)
exports.p = props => jste('p', props)
exports.picture = props => jste('picture', props)
exports.pre = props => jste('pre', props)
exports.progress = props => jste('progress', props)
exports.q = props => jste('q', props)
exports.rp = props => jste('rp', props)
exports.rt = props => jste('rt', props)
exports.ruby = props => jste('ruby', props)
exports.s = props => jste('s', props)
exports.samp = props => jste('samp', props)
exports.script = props => jste('script', props)
exports.section = props => jste('section', props)
exports.select = props => jste('select', props)
exports.slot = props => jste('slot', props)
exports.small = props => jste('small', props)
exports.source = props => jste('source', props)
exports.span = props => jste('span', props)
exports.strong = props => jste('strong', props)
exports.style = props => jste('style', props)
exports.sub = props => jste('sub', props)
exports.summary = props => jste('summary', props)
exports.sup = props => jste('sup', props)
exports.table = props => jste('table', props)
exports.tbody = props => jste('tbody', props)
exports.td = props => jste('td', props)
exports.template = props => jste('template', props)
exports.textarea = props => jste('textarea', props)
exports.tfoot = props => jste('tfoot', props)
exports.th = props => jste('th', props)
exports.thead = props => jste('thead', props)
exports.time = props => jste('time', props)
exports.title = props => jste('title', props)
exports.tr = props => jste('tr', props)
exports.track = props => jste('track', props)
exports.u = props => jste('u', props)
exports.ul = props => jste('ul', props)
exports["var"] = props => jste('var', props)
exports.video = props => jste('video', props)
exports.wbr = props => jste('wbr', props)


/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Template = __webpack_require__(3)
const handlers = __webpack_require__(5)
const attrNameMap = __webpack_require__(7)
const replace = __webpack_require__(6)
const children = handlers.children

const ATTR_RE = /["&]/g

/**
 * @param {string} name
 * @param {{}|[]|string|*} [props]
 * @return {Template}
 */
function jste(name, props) {
  if(!props) {
    return new Template(name)
  }
  if(props.constructor !== Object) {
    return new Template(name, null, children(props))
  }
  let attrs = ''
  let prop, value, handler
  for(prop in props) {
    if(handlers[prop]) {
      handler = handlers[prop]
      continue
    }
    value = props[prop]
    if(value === null || value === false) {
      continue
    }
    attrs += ' ' + (attrNameMap[prop] || prop)
    if(value === true) {
      continue
    }
    if(typeof value === 'string' && ATTR_RE.test(value)) {
      value = value.replace(ATTR_RE, replace)
    }
    attrs += `="${ value }"`
  }
  return new Template(name, attrs, handler?.(props[handler.__propName]))
}

module.exports = jste


/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isVoidElement = __webpack_require__(4)

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


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = {
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


/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const replace = __webpack_require__(6)

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


/***/ }),
/* 6 */
/***/ ((module) => {

const entities = {
  '"' : '&quot;',
  '&' : '&amp;',
  '<' : '&lt;',
  '>' : '&gt;',
}

/**
 * @param {string} c
 * @return {string}
 */
module.exports = c => entities[c]


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = {
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


/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const jste = __webpack_require__(2)

/**
 * @param {{}|[]|string|*} [props]
 * @return {string}
 */
module.exports = props => {
  if(props?.constructor !== Object) {
    return jste('html', props)
  }
  const { doctype, ...rest } = props
  const result = jste('html', rest)
  if(doctype) {
    result.html = '<!doctype html>' + result.html
  }
  return result
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});