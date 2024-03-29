const Template = require('./Template')

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
const jste = (tagName, props) => new Template(tagName, props)

exports = module.exports = jste

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
exports.a = props => new Template('a', props)
exports.abbr = props => new Template('abbr', props)
exports.address = props => new Template('address', props)
exports.area = props => new Template('area', props)
exports.article = props => new Template('article', props)
exports.aside = props => new Template('aside', props)
exports.audio = props => new Template('audio', props)
exports.b = props => new Template('b', props)
exports.base = props => new Template('base', props)
exports.bdi = props => new Template('bdi', props)
exports.bdo = props => new Template('bdo', props)
exports.blockquote = props => new Template('blockquote', props)
exports.body = props => new Template('body', props)
exports.br = props => new Template('br', props)
exports.button = props => new Template('button', props)
exports.canvas = props => new Template('canvas', props)
exports.caption = props => new Template('caption', props)
exports.cite = props => new Template('cite', props)
exports.code = props => new Template('code', props)
exports.col = props => new Template('col', props)
exports.colgroup = props => new Template('colgroup', props)
exports.comment = data => `<!--${ data }-->`
exports.data = props => new Template('data', props)
exports.datalist = props => new Template('datalist', props)
exports.dd = props => new Template('dd', props)
exports.del = props => new Template('del', props)
exports.details = props => new Template('details', props)
exports.dfn = props => new Template('dfn', props)
exports.dialog = props => new Template('dialog', props)
exports.div = props => new Template('div', props)
exports.dl = props => new Template('dl', props)
exports.dt = props => new Template('dt', props)
exports.em = props => new Template('em', props)
exports.embed = props => new Template('embed', props)
exports.fieldset = props => new Template('fieldset', props)
exports.figcaption = props => new Template('figcaption', props)
exports.figure = props => new Template('figure', props)
exports.footer = props => new Template('footer', props)
exports.form = props => new Template('form', props)
exports.fragment = require('./fragment.js')
exports.h1 = props => new Template('h1', props)
exports.h2 = props => new Template('h2', props)
exports.h3 = props => new Template('h3', props)
exports.h4 = props => new Template('h4', props)
exports.h5 = props => new Template('h5', props)
exports.h6 = props => new Template('h6', props)
exports.head = props => new Template('head', props)
exports.header = props => new Template('header', props)
exports.hgroup = props => new Template('hgroup', props)
exports.hr = props => new Template('hr', props)
exports.html = require('./html')
exports.i = props => new Template('i', props)
exports.iframe = props => new Template('iframe', props)
exports.img = props => new Template('img', props)
exports.input = props => new Template('input', props)
exports.ins = props => new Template('ins', props)
exports.kbd = props => new Template('kbd', props)
exports.label = props => new Template('label', props)
exports.legend = props => new Template('legend', props)
exports.li = props => new Template('li', props)
exports.link = props => new Template('link', props)
exports.main = props => new Template('main', props)
exports.map = props => new Template('map', props)
exports.mark = props => new Template('mark', props)
exports.menu = props => new Template('menu', props)
exports.meta = props => new Template('meta', props)
exports.meter = props => new Template('meter', props)
exports.nav = props => new Template('nav', props)
exports.noscript = props => new Template('noscript', props)
exports.object = props => new Template('object', props)
exports.ol = props => new Template('ol', props)
exports.optgroup = props => new Template('optgroup', props)
exports.option = props => new Template('option', props)
exports.output = props => new Template('output', props)
exports.p = props => new Template('p', props)
exports.picture = props => new Template('picture', props)
exports.pre = props => new Template('pre', props)
exports.progress = props => new Template('progress', props)
exports.q = props => new Template('q', props)
exports.rp = props => new Template('rp', props)
exports.rt = props => new Template('rt', props)
exports.ruby = props => new Template('ruby', props)
exports.s = props => new Template('s', props)
exports.samp = props => new Template('samp', props)
exports.script = require('./script')
exports.section = props => new Template('section', props)
exports.select = props => new Template('select', props)
exports.slot = props => new Template('slot', props)
exports.small = props => new Template('small', props)
exports.source = props => new Template('source', props)
exports.span = props => new Template('span', props)
exports.strong = props => new Template('strong', props)
exports.style = require('./style')
exports.sub = props => new Template('sub', props)
exports.summary = props => new Template('summary', props)
exports.sup = props => new Template('sup', props)
exports.table = props => new Template('table', props)
exports.tbody = props => new Template('tbody', props)
exports.td = props => new Template('td', props)
exports.template = props => new Template('template', props)
exports.textarea = props => new Template('textarea', props)
exports.tfoot = props => new Template('tfoot', props)
exports.th = props => new Template('th', props)
exports.thead = props => new Template('thead', props)
exports.time = props => new Template('time', props)
exports.title = props => new Template('title', props)
exports.tr = props => new Template('tr', props)
exports.track = props => new Template('track', props)
exports.u = props => new Template('u', props)
exports.ul = props => new Template('ul', props)
exports.var = props => new Template('var', props)
exports.video = props => new Template('video', props)
exports.wbr = props => new Template('wbr', props)
