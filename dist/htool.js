(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["htool"] = factory();
	else
		root["htool"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * @module htool
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
module.exports = __webpack_require__(1)


/***/ }),
/* 1 */
/***/ ((module, exports, __webpack_require__) => {

const htool = __webpack_require__(2)

exports = module.exports = htool

exports.a = props => htool('a', props)
exports.abbr = props => htool('abbr', props)
exports.address = props => htool('address', props)
exports.area = props => htool('area', props)
exports.article = props => htool('article', props)
exports.aside = props => htool('aside', props)
exports.audio = props => htool('audio', props)
exports.b = props => htool('b', props)
exports.base = props => htool('base', props)
exports.bdi = props => htool('bdi', props)
exports.bdo = props => htool('bdo', props)
exports.blockquote = props => htool('blockquote', props)
exports.body = props => htool('body', props)
exports.br = props => htool('br', props)
exports.button = props => htool('button', props)
exports.canvas = props => htool('canvas', props)
exports.caption = props => htool('caption', props)
exports.cite = props => htool('cite', props)
exports.code = props => htool('code', props)
exports.col = props => htool('col', props)
exports.colgroup = props => htool('colgroup', props)
exports.data = props => htool('data', props)
exports.datalist = props => htool('datalist', props)
exports.dd = props => htool('dd', props)
exports.del = props => htool('del', props)
exports.details = props => htool('details', props)
exports.dfn = props => htool('dfn', props)
exports.dialog = props => htool('dialog', props)
exports.div = props => htool('div', props)
exports.dl = props => htool('dl', props)
exports.dt = props => htool('dt', props)
exports.em = props => htool('em', props)
exports.embed = props => htool('embed', props)
exports.fieldset = props => htool('fieldset', props)
exports.figcaption = props => htool('figcaption', props)
exports.figure = props => htool('figure', props)
exports.footer = props => htool('footer', props)
exports.form = props => htool('form', props)
exports.h1 = props => htool('h1', props)
exports.h2 = props => htool('h2', props)
exports.h3 = props => htool('h3', props)
exports.h4 = props => htool('h4', props)
exports.h5 = props => htool('h5', props)
exports.h6 = props => htool('h6', props)
exports.head = props => htool('head', props)
exports.header = props => htool('header', props)
exports.hgroup = props => htool('hgroup', props)
exports.hr = props => htool('hr', props)
exports.html = __webpack_require__(8)
exports.i = props => htool('i', props)
exports.iframe = props => htool('iframe', props)
exports.img = props => htool('img', props)
exports.input = props => htool('input', props)
exports.ins = props => htool('ins', props)
exports.kbd = props => htool('kbd', props)
exports.label = props => htool('label', props)
exports.legend = props => htool('legend', props)
exports.li = props => htool('li', props)
exports.link = props => htool('link', props)
exports.main = props => htool('main', props)
exports.map = props => htool('map', props)
exports.mark = props => htool('mark', props)
exports.menu = props => htool('menu', props)
exports.meta = props => htool('meta', props)
exports.meter = props => htool('meter', props)
exports.nav = props => htool('nav', props)
exports.noscript = props => htool('noscript', props)
exports.object = props => htool('object', props)
exports.ol = props => htool('ol', props)
exports.optgroup = props => htool('optgroup', props)
exports.option = props => htool('option', props)
exports.output = props => htool('output', props)
exports.p = props => htool('p', props)
exports.picture = props => htool('picture', props)
exports.pre = props => htool('pre', props)
exports.progress = props => htool('progress', props)
exports.q = props => htool('q', props)
exports.rp = props => htool('rp', props)
exports.rt = props => htool('rt', props)
exports.ruby = props => htool('ruby', props)
exports.s = props => htool('s', props)
exports.samp = props => htool('samp', props)
exports.script = props => htool('script', props)
exports.section = props => htool('section', props)
exports.select = props => htool('select', props)
exports.slot = props => htool('slot', props)
exports.small = props => htool('small', props)
exports.source = props => htool('source', props)
exports.span = props => htool('span', props)
exports.strong = props => htool('strong', props)
exports.style = props => htool('style', props)
exports.sub = props => htool('sub', props)
exports.summary = props => htool('summary', props)
exports.sup = props => htool('sup', props)
exports.table = props => htool('table', props)
exports.tbody = props => htool('tbody', props)
exports.td = props => htool('td', props)
exports.template = props => htool('template', props)
exports.textarea = props => htool('textarea', props)
exports.tfoot = props => htool('tfoot', props)
exports.th = props => htool('th', props)
exports.thead = props => htool('thead', props)
exports.time = props => htool('time', props)
exports.title = props => htool('title', props)
exports.tr = props => htool('tr', props)
exports.track = props => htool('track', props)
exports.u = props => htool('u', props)
exports.ul = props => htool('ul', props)
exports["var"] = props => htool('var', props)
exports.video = props => htool('video', props)
exports.wbr = props => htool('wbr', props)


/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const HString = __webpack_require__(3)
const handlers = __webpack_require__(5)
const attrNameMap = __webpack_require__(7)
const replace = __webpack_require__(6)

const ATTR_RE = /["&]/g

/**
 * @param {string} name
 * @param {{}|[]|string|*} [props]
 * @return {HString}
 */
function htool(name, props) {
  if(!props) {
    return new HString(name)
  }
  if(props.constructor !== Object) {
    return new HString(name, null, handlers.children(props))
  }
  let attrs = ''
  let prop, value, handler
  for(prop in props) {
    if(handler = handlers[prop]) {
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
  return new HString(name, attrs, handler?.(props[handler.__propName]))
}

module.exports = htool


/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isVoidElement = __webpack_require__(4)

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

const HString = __webpack_require__(3)
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
    if(typeof children === 'string' && children.constructor !== HString) {
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

const htool = __webpack_require__(2)

/**
 * @param {{}|[]|string|*} [props]
 * @return {string}
 */
module.exports = props => {
  if(props?.constructor !== Object) {
    return htool('html', props)
  }
  const { doctype, ...rest } = props
  const result = htool('html', rest)
  return doctype ? '<!doctype html>' + result : result
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