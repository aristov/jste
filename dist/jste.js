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
module.exports = __webpack_require__(1);
if (typeof window === 'undefined') {
  module.exports.__express = eval('require("./engine")');
}

/***/ }),
/* 1 */
/***/ ((module, exports, __webpack_require__) => {

var Template = __webpack_require__(2);
var jste = function jste(tagName, props) {
  return new Template(tagName, props);
};
exports = module.exports = jste;
exports.a = function (props) {
  return new Template('a', props);
};
exports.abbr = function (props) {
  return new Template('abbr', props);
};
exports.address = function (props) {
  return new Template('address', props);
};
exports.area = function (props) {
  return new Template('area', props);
};
exports.article = function (props) {
  return new Template('article', props);
};
exports.aside = function (props) {
  return new Template('aside', props);
};
exports.audio = function (props) {
  return new Template('audio', props);
};
exports.b = function (props) {
  return new Template('b', props);
};
exports.base = function (props) {
  return new Template('base', props);
};
exports.bdi = function (props) {
  return new Template('bdi', props);
};
exports.bdo = function (props) {
  return new Template('bdo', props);
};
exports.blockquote = function (props) {
  return new Template('blockquote', props);
};
exports.body = function (props) {
  return new Template('body', props);
};
exports.br = function (props) {
  return new Template('br', props);
};
exports.button = function (props) {
  return new Template('button', props);
};
exports.canvas = function (props) {
  return new Template('canvas', props);
};
exports.caption = function (props) {
  return new Template('caption', props);
};
exports.cite = function (props) {
  return new Template('cite', props);
};
exports.code = function (props) {
  return new Template('code', props);
};
exports.col = function (props) {
  return new Template('col', props);
};
exports.colgroup = function (props) {
  return new Template('colgroup', props);
};
exports.data = function (props) {
  return new Template('data', props);
};
exports.datalist = function (props) {
  return new Template('datalist', props);
};
exports.dd = function (props) {
  return new Template('dd', props);
};
exports.del = function (props) {
  return new Template('del', props);
};
exports.details = function (props) {
  return new Template('details', props);
};
exports.dfn = function (props) {
  return new Template('dfn', props);
};
exports.dialog = function (props) {
  return new Template('dialog', props);
};
exports.div = function (props) {
  return new Template('div', props);
};
exports.dl = function (props) {
  return new Template('dl', props);
};
exports.dt = function (props) {
  return new Template('dt', props);
};
exports.em = function (props) {
  return new Template('em', props);
};
exports.embed = function (props) {
  return new Template('embed', props);
};
exports.fieldset = function (props) {
  return new Template('fieldset', props);
};
exports.figcaption = function (props) {
  return new Template('figcaption', props);
};
exports.figure = function (props) {
  return new Template('figure', props);
};
exports.footer = function (props) {
  return new Template('footer', props);
};
exports.form = function (props) {
  return new Template('form', props);
};
exports.h1 = function (props) {
  return new Template('h1', props);
};
exports.h2 = function (props) {
  return new Template('h2', props);
};
exports.h3 = function (props) {
  return new Template('h3', props);
};
exports.h4 = function (props) {
  return new Template('h4', props);
};
exports.h5 = function (props) {
  return new Template('h5', props);
};
exports.h6 = function (props) {
  return new Template('h6', props);
};
exports.head = function (props) {
  return new Template('head', props);
};
exports.header = function (props) {
  return new Template('header', props);
};
exports.hgroup = function (props) {
  return new Template('hgroup', props);
};
exports.hr = function (props) {
  return new Template('hr', props);
};
exports.html = __webpack_require__(14);
exports.i = function (props) {
  return new Template('i', props);
};
exports.iframe = function (props) {
  return new Template('iframe', props);
};
exports.img = function (props) {
  return new Template('img', props);
};
exports.input = function (props) {
  return new Template('input', props);
};
exports.ins = function (props) {
  return new Template('ins', props);
};
exports.kbd = function (props) {
  return new Template('kbd', props);
};
exports.label = function (props) {
  return new Template('label', props);
};
exports.legend = function (props) {
  return new Template('legend', props);
};
exports.li = function (props) {
  return new Template('li', props);
};
exports.link = function (props) {
  return new Template('link', props);
};
exports.main = function (props) {
  return new Template('main', props);
};
exports.map = function (props) {
  return new Template('map', props);
};
exports.mark = function (props) {
  return new Template('mark', props);
};
exports.menu = function (props) {
  return new Template('menu', props);
};
exports.meta = function (props) {
  return new Template('meta', props);
};
exports.meter = function (props) {
  return new Template('meter', props);
};
exports.nav = function (props) {
  return new Template('nav', props);
};
exports.noscript = function (props) {
  return new Template('noscript', props);
};
exports.object = function (props) {
  return new Template('object', props);
};
exports.ol = function (props) {
  return new Template('ol', props);
};
exports.optgroup = function (props) {
  return new Template('optgroup', props);
};
exports.option = function (props) {
  return new Template('option', props);
};
exports.output = function (props) {
  return new Template('output', props);
};
exports.p = function (props) {
  return new Template('p', props);
};
exports.picture = function (props) {
  return new Template('picture', props);
};
exports.pre = function (props) {
  return new Template('pre', props);
};
exports.progress = function (props) {
  return new Template('progress', props);
};
exports.q = function (props) {
  return new Template('q', props);
};
exports.rp = function (props) {
  return new Template('rp', props);
};
exports.rt = function (props) {
  return new Template('rt', props);
};
exports.ruby = function (props) {
  return new Template('ruby', props);
};
exports.s = function (props) {
  return new Template('s', props);
};
exports.samp = function (props) {
  return new Template('samp', props);
};
exports.script = __webpack_require__(22);
exports.section = function (props) {
  return new Template('section', props);
};
exports.select = function (props) {
  return new Template('select', props);
};
exports.slot = function (props) {
  return new Template('slot', props);
};
exports.small = function (props) {
  return new Template('small', props);
};
exports.source = function (props) {
  return new Template('source', props);
};
exports.span = function (props) {
  return new Template('span', props);
};
exports.strong = function (props) {
  return new Template('strong', props);
};
exports.style = function (props) {
  return new Template('style', props);
};
exports.sub = function (props) {
  return new Template('sub', props);
};
exports.summary = function (props) {
  return new Template('summary', props);
};
exports.sup = function (props) {
  return new Template('sup', props);
};
exports.table = function (props) {
  return new Template('table', props);
};
exports.tbody = function (props) {
  return new Template('tbody', props);
};
exports.td = function (props) {
  return new Template('td', props);
};
exports.template = function (props) {
  return new Template('template', props);
};
exports.textarea = function (props) {
  return new Template('textarea', props);
};
exports.tfoot = function (props) {
  return new Template('tfoot', props);
};
exports.th = function (props) {
  return new Template('th', props);
};
exports.thead = function (props) {
  return new Template('thead', props);
};
exports.time = function (props) {
  return new Template('time', props);
};
exports.title = function (props) {
  return new Template('title', props);
};
exports.tr = function (props) {
  return new Template('tr', props);
};
exports.track = function (props) {
  return new Template('track', props);
};
exports.u = function (props) {
  return new Template('u', props);
};
exports.ul = function (props) {
  return new Template('ul', props);
};
exports["var"] = function (props) {
  return new Template('var', props);
};
exports.video = function (props) {
  return new Template('video', props);
};
exports.wbr = function (props) {
  return new Template('wbr', props);
};

/***/ }),
/* 2 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* module decorator */ module = __webpack_require__.hmd(module);





function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var toString = Object.prototype.toString;
var filter = function filter(value) {
  return !skipTypes[toString.call(value)];
};
var replace = function replace(_, az, AZ) {
  return az + '-' + AZ.toLowerCase();
};
var skipTypes = {
  '[object Undefined]': true,
  '[object Boolean]': true,
  '[object Null]': true
};
var entities = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};
var voidElements = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  link: true,
  meta: true,
  source: true,
  track: true,
  wbr: true
};
var attrNameMap = {
  acceptCharset: 'accept-charset',
  accessKey: 'accesskey',
  allowFullScreen: 'allowfullscreen',
  className: 'class',
  colSpan: 'colspan',
  contentEditable: 'contenteditable',
  crossOrigin: 'crossorigin',
  dateTime: 'datetime',
  defaultChecked: 'checked',
  defaultMuted: 'muted',
  defaultSelected: 'selected',
  defaultValue: 'value',
  dirName: 'dirname',
  enterKeyHint: 'enterkeyhint',
  formAction: 'formaction',
  formEnctype: 'formenctype',
  formMethod: 'formmethod',
  formNoValidate: 'formnovalidate',
  formTarget: 'formtarget',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  inputMode: 'inputmode',
  isMap: 'ismap',
  maxLength: 'maxlength',
  minLength: 'minlength',
  noModule: 'nomodule',
  noValidate: 'novalidate',
  readOnly: 'readonly',
  referrerPolicy: 'referrerpolicy',
  rowSpan: 'rowspan',
  tabIndex: 'tabindex',
  useMap: 'usemap'
};
var CAMEL_CASE_RE = /([a-z])([A-Z])/g;
var ESCAPE_TEXT_RE = /[<>&]/g;
var ESCAPE_ATTR_RE = /["&]/g;
var LINE_BREAK_RE = /\n/g;
var _tagName = /*#__PURE__*/new WeakMap();
var _attrs = /*#__PURE__*/new WeakMap();
var _content = /*#__PURE__*/new WeakMap();
var _setAttr = /*#__PURE__*/new WeakSet();
var Template = /*#__PURE__*/function () {
  /**
   * @param {string} tagName
   * @param {{}|[]|string|*} [props]
   */
  function Template(tagName, props) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Template);
    /**
     * @param {string} prop
     * @param {string|*} value
     */
    _classPrivateMethodInitSpec(this, _setAttr);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "__props", void 0);
    _classPrivateFieldInitSpec(this, _tagName, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _attrs, {
      writable: true,
      value: ''
    });
    _classPrivateFieldInitSpec(this, _content, {
      writable: true,
      value: ''
    });
    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _tagName, tagName);
    this.__props = (props === null || props === void 0 ? void 0 : props.constructor) === Object ? props : {
      children: props
    };
  }

  /**
   * @return {string}
   */
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Template, [{
    key: "toString",
    value: function toString() {
      var props = this.__props;
      var tagName = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _tagName);
      var prop, value;
      for (prop in props) {
        value = props[prop];
        if (value === null || value === false) {
          continue;
        }
        if (this[prop]) {
          this[prop](value);
        } else _classPrivateMethodGet(this, _setAttr, _setAttr2).call(this, prop, value);
      }
      return voidElements[tagName] ? "<".concat(tagName + (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _attrs), ">") : "<".concat(tagName + (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _attrs), ">").concat((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _content), "</").concat(tagName, ">");
    }

    /**
     * @param {string|{}} style
     */
  }, {
    key: "style",
    value: function style(_style) {
      if (typeof _style === 'string') {
        _classPrivateMethodGet(this, _setAttr, _setAttr2).call(this, 'style', _style);
        return;
      }
      var value = '';
      var prop, name;
      for (prop in _style) {
        name = prop.replace(CAMEL_CASE_RE, replace);
        value += "".concat(name, ":").concat(_style[prop], ";");
      }
      _classPrivateMethodGet(this, _setAttr, _setAttr2).call(this, 'style', value);
    }

    /**
     * @param {string|[]} className
     */
  }, {
    key: "className",
    value: function className(_className) {
      var value = Array.isArray(_className) ? _className.filter(Boolean).join(' ') : _className;
      _classPrivateMethodGet(this, _setAttr, _setAttr2).call(this, 'class', value);
    }

    /**
     * @param {*} children
     */
  }, {
    key: "children",
    value: function children(_children) {
      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _content, Template.children(_children));
    }

    /**
     * @param {string|[]} innerHTML
     */
  }, {
    key: "innerHTML",
    value: function innerHTML(_innerHTML) {
      if (!filter(_innerHTML)) {
        return;
      }
      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _content, Array.isArray(_innerHTML) ? _innerHTML.filter(filter).join('') : _innerHTML);
    }

    /**
     * @param {string|[]} innerText
     */
  }, {
    key: "innerText",
    value: function innerText(_innerText) {
      if (!filter(_innerText)) {
        return;
      }
      if (Array.isArray(_innerText)) {
        _innerText = _innerText.filter(filter).join('\n');
      }
      _innerText = String(_innerText);
      _innerText = _innerText.replace(ESCAPE_TEXT_RE, _classStaticPrivateMethodGet(Template, Template, _escape));
      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _content, _innerText.replace(LINE_BREAK_RE, '<br>'));
    }
  }], [{
    key: "children",
    value:
    /**
     * @param {Template|string|*} children
     * @return {string}
     */
    function children(_children2) {
      if (!filter(_children2)) {
        return '';
      }
      if (!Array.isArray(_children2)) {
        if (_children2 instanceof Template) {
          return _children2;
        }
        _children2 = String(_children2);
        return _children2.replace(ESCAPE_TEXT_RE, _classStaticPrivateMethodGet(Template, Template, _escape));
      }
      var result = '';
      var child;
      var _iterator = _createForOfIteratorHelper(_children2),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          child = _step.value;
          result += Template.children(child);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return result;
    }

    /**
     * @param {string} char
     * @return {string}
     */
  }]);
  return Template;
}();
function _setAttr2(prop, value) {
  var name = attrNameMap[prop] || prop;
  if (value === true) {
    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _attrs, (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _attrs) + " ".concat(name));
    return;
  }
  value = String(value);
  value = value.replace(ESCAPE_ATTR_RE, _classStaticPrivateMethodGet(Template, Template, _escape));
  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _attrs, (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _attrs) + " ".concat(name, "=\"").concat(value, "\""));
}
function _escape(_char) {
  return entities[_char];
}
module.exports = Template;

/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),
/* 9 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldGet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "get");
  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor);
}

/***/ }),
/* 10 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorGet)
/* harmony export */ });
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}

/***/ }),
/* 11 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classExtractFieldDescriptor)
/* harmony export */ });
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}

/***/ }),
/* 12 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldSet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);


function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "set");
  (0,_classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor, value);
  return value;
}

/***/ }),
/* 13 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorSet)
/* harmony export */ });
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

/***/ }),
/* 14 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* module decorator */ module = __webpack_require__.hmd(module);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Template = __webpack_require__(2);
var DOCTYPE = '<!doctype html>';
var Html = /*#__PURE__*/function (_Template) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Html, _Template);
  var _super = _createSuper(Html);
  function Html() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Html);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Html, [{
    key: "toString",
    value:
    /**
     * @return {string}
     */
    function toString() {
      return this.__props.doctype ? DOCTYPE + (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Html.prototype), "toString", this).call(this) : (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Html.prototype), "toString", this).call(this);
    }
  }, {
    key: "doctype",
    value: function doctype() {
      void null;
    }
  }]);
  return Html;
}(Template);
/**
 * @param {{}|[]|string|*} [props]
 * @return {string}
 */
module.exports = function (props) {
  return new Html('html', props);
};

/***/ }),
/* 15 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _get)
/* harmony export */ });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = (0,_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}

/***/ }),
/* 16 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _superPropBase)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
    if (object === null) break;
  }
  return object;
}

/***/ }),
/* 17 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 18 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),
/* 19 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),
/* 20 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),
/* 21 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),
/* 22 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* module decorator */ module = __webpack_require__.hmd(module);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Template = __webpack_require__(2);
var Script = /*#__PURE__*/function (_Template) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Script, _Template);
  var _super = _createSuper(Script);
  function Script() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Script);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Script, [{
    key: "text",
    value:
    /**
     * @param {string} text
     */
    function text(_text) {
      this.innerHTML(_text);
    }

    /**
     * @param {string} children
     */
  }, {
    key: "children",
    value: function children(_children) {
      this.innerHTML(_children);
    }
  }]);
  return Script;
}(Template);
module.exports = function (props) {
  return new Script('script', props);
};

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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