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
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/**
 * @module jste
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
module.exports = __webpack_require__(1);
if (false) {}

/***/ }),
/* 1 */
/***/ ((module, exports, __webpack_require__) => {



var Template = __webpack_require__(2);

/**
 * Generic template for creating any type of element
 * @param {string} tagName element tag name (lower case)
 * @param {{}|Template|*} [props] element properties (attributes and descendants)
 * @param {*} [props.children] element children
 * @param {string|string[]} [props.innerHTML] HTML markup of the element
 * @param {string|string[]} [props.innerText] rendered text content of the element and its descendants
 * @param {string} [props.id] unique element identifier
 * @param {string|string[]} [props.className] element class attribute value
 * @param {string|{}} [props.style] element style attribute value
 * @param {string} [props.accessKey] element accesskey attribute value
 * @param {string} [props.autocapitalize] element autocapitalize attribute value
 * @param {string} [props.autofocus] element autofocus attribute value
 * @param {string} [props.contentEditable] element contenteditable attribute value
 * @param {string} [props.dir] element dir attribute value
 * @param {boolean} [props.draggable] element draggable attribute value
 * @param {string} [props.enterKeyHint] element enterkeyhint attribute value
 * @param {boolean} [props.hidden] element hidden attribute value
 * @param {boolean} [props.inert] element inert attribute value
 * @param {string} [props.inputMode] element inputmode attribute value
 * @param {string} [props.lang] element lang attribute value
 * @param {boolean} [props.spellcheck] element spellcheck attribute value
 * @param {number} [props.tabIndex] element tabindex attribute value
 * @param {string} [props.title] element title attribute value
 * @param {boolean} [props.translate] element translate attribute value
 * @return {Template}
 */
var jste = function jste(tagName, props) {
  return new Template(tagName, props);
};
exports = module.exports = jste;

/**
 * Template for creating an HTML element a
 * @param {{}|Template|*} props element properties (attributes and descendants)
 * @param {string} [props.href] address of the hyperlink
 * @param {string} [props.target] navigable for hyperlink navigation
 * @param {string} [props.download] whether to download the resource instead of navigating to it, and its filename if so
 * @param {string} [props.ping] URLs to ping
 * @param {string} [props.rel] relationship between the location in the document containing the hyperlink and the destination resource
 * @param {string} [props.hreflang] language of the linked resource
 * @param {string} [props.type] hint for the type of the referenced resource
 * @param {string} [props.referrerPolicy] referrer policy for fetches initiated by the element
 * @return {Template}
 */
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
exports.comment = function (data) {
  return "<!--".concat(data, "-->");
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
exports.fragment = __webpack_require__(10);
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
exports.html = __webpack_require__(16);
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
exports.script = __webpack_require__(19);
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
exports.style = __webpack_require__(20);
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(3);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(4));
var _createClass2 = _interopRequireDefault(__webpack_require__(5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(9));
var _class;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
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
var _setAttr = /*#__PURE__*/new WeakSet();
var Template = /*#__PURE__*/function () {
  /**
   * @param {string} tagName
   * @param {{}|[]|string|*} [props]
   */
  function Template(tagName, props) {
    var _props;
    (0, _classCallCheck2["default"])(this, Template);
    /**
     * @param {string} prop
     * @param {string|*} value
     */
    _classPrivateMethodInitSpec(this, _setAttr);
    (0, _defineProperty2["default"])(this, "__props", void 0);
    (0, _defineProperty2["default"])(this, "__tagName", void 0);
    (0, _defineProperty2["default"])(this, "__attrs", '');
    (0, _defineProperty2["default"])(this, "__content", '');
    this.__tagName = tagName;
    this.__props = props = ((_props = props) === null || _props === void 0 ? void 0 : _props.constructor) === Object ? props : {
      children: props
    };
    var _prop, _value;
    for (_prop in props) {
      _value = props[_prop];
      if (_value === null || _value === false) {
        continue;
      }
      if (this[_prop]) {
        this[_prop](_value);
      } else _classPrivateMethodGet(this, _setAttr, _setAttr2).call(this, _prop, _value);
    }
  }

  /**
   * @return {string}
   */
  (0, _createClass2["default"])(Template, [{
    key: "toString",
    value: function toString() {
      var tagName = this.__tagName;
      return voidElements[tagName] ? "<".concat(tagName + this.__attrs, ">") : "<".concat(tagName + this.__attrs, ">").concat(this.__content, "</").concat(tagName, ">");
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
     * @param {string|string[]} className
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
    value: function children(_children3) {
      this.__content = _classStaticPrivateMethodGet(Template, Template, _children).call(Template, _children3);
    }

    /**
     * @param {string|string[]} innerHTML
     */
  }, {
    key: "innerHTML",
    value: function innerHTML(_innerHTML) {
      if (!filter(_innerHTML)) {
        return;
      }
      this.__content = Array.isArray(_innerHTML) ? _innerHTML.filter(filter).join('') : _innerHTML;
    }

    /**
     * @param {string|string[]} innerText
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
      this.__content = _innerText.replace(LINE_BREAK_RE, '<br>');
    }
  }]);
  return Template;
}();
_class = Template;
function _setAttr2(prop, value) {
  var name = attrNameMap[prop] || prop;
  if (value === true) {
    this.__attrs += " ".concat(name);
    return;
  }
  value = String(value);
  value = value.replace(ESCAPE_ATTR_RE, _classStaticPrivateMethodGet(_class, _class, _escape));
  this.__attrs += " ".concat(name, "=\"").concat(value, "\"");
}
/**
 * @param {Template|string|*} children
 * @return {string}
 */
function _children(children) {
  if (!filter(children)) {
    return '';
  }
  if (!Array.isArray(children)) {
    if (children instanceof _class) {
      return children;
    }
    children = String(children);
    return children.replace(ESCAPE_TEXT_RE, _classStaticPrivateMethodGet(_class, _class, _escape));
  }
  var result = '';
  var child;
  var _iterator = _createForOfIteratorHelper(children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      child = _step.value;
      result += _classStaticPrivateMethodGet(_class, _class, _children).call(_class, child);
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
function _escape(_char) {
  return entities[_char];
}
module.exports = Template;

/***/ }),
/* 3 */
/***/ ((module) => {



function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/***/ ((module) => {



function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var toPropertyKey = __webpack_require__(6);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
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
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _typeof = (__webpack_require__(7)["default"]);
var toPrimitive = __webpack_require__(8);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 7 */
/***/ ((module) => {



function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _typeof = (__webpack_require__(7)["default"]);
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var toPropertyKey = __webpack_require__(6);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
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
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(3);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(4));
var _createClass2 = _interopRequireDefault(__webpack_require__(5));
var _inherits2 = _interopRequireDefault(__webpack_require__(11));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(13));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(15));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Template = __webpack_require__(2);
var Fragment = /*#__PURE__*/function (_Template) {
  (0, _inherits2["default"])(Fragment, _Template);
  var _super = _createSuper(Fragment);
  function Fragment() {
    (0, _classCallCheck2["default"])(this, Fragment);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Fragment, [{
    key: "toString",
    value:
    /**
     * @return {string}
     */
    function toString() {
      return this.__content;
    }
  }]);
  return Fragment;
}(Template);
module.exports = function (props) {
  return new Fragment(null, props);
};

/***/ }),
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var setPrototypeOf = __webpack_require__(12);
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
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 12 */
/***/ ((module) => {



function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _typeof = (__webpack_require__(7)["default"]);
var assertThisInitialized = __webpack_require__(14);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 14 */
/***/ ((module) => {



function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/***/ ((module) => {



function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(3);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(4));
var _createClass2 = _interopRequireDefault(__webpack_require__(5));
var _get2 = _interopRequireDefault(__webpack_require__(17));
var _inherits2 = _interopRequireDefault(__webpack_require__(11));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(13));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(15));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Template = __webpack_require__(2);
var DOCTYPE = '<!doctype html>';
var Html = /*#__PURE__*/function (_Template) {
  (0, _inherits2["default"])(Html, _Template);
  var _super = _createSuper(Html);
  function Html() {
    (0, _classCallCheck2["default"])(this, Html);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Html, [{
    key: "toString",
    value:
    /**
     * @return {string}
     */
    function toString() {
      return this.__props.doctype ? DOCTYPE + (0, _get2["default"])((0, _getPrototypeOf2["default"])(Html.prototype), "toString", this).call(this) : (0, _get2["default"])((0, _getPrototypeOf2["default"])(Html.prototype), "toString", this).call(this);
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
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var superPropBase = __webpack_require__(18);
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _get.apply(this, arguments);
}
module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var getPrototypeOf = __webpack_require__(15);
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(3);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(4));
var _createClass2 = _interopRequireDefault(__webpack_require__(5));
var _inherits2 = _interopRequireDefault(__webpack_require__(11));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(13));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(15));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Template = __webpack_require__(2);
var Script = /*#__PURE__*/function (_Template) {
  (0, _inherits2["default"])(Script, _Template);
  var _super = _createSuper(Script);
  function Script() {
    (0, _classCallCheck2["default"])(this, Script);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Script, [{
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

/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(3);
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(4));
var _createClass2 = _interopRequireDefault(__webpack_require__(5));
var _inherits2 = _interopRequireDefault(__webpack_require__(11));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(13));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(15));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Template = __webpack_require__(2);
var Style = /*#__PURE__*/function (_Template) {
  (0, _inherits2["default"])(Style, _Template);
  var _super = _createSuper(Style);
  function Style() {
    (0, _classCallCheck2["default"])(this, Style);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Style, [{
    key: "children",
    value:
    /**
     * @param {string} children
     */
    function children(_children) {
      this.innerHTML(_children);
    }
  }]);
  return Style;
}(Template);
module.exports = function (props) {
  return new Style('style', props);
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