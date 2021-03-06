const test = require('ava')
const h = require('..')

test('a', t => t.is(h.a().toString(), '<a></a>'))
test('abbr', t => t.is(h.abbr().toString(), '<abbr></abbr>'))
test('address', t => t.is(h.address().toString(), '<address></address>'))
test('area', t => t.is(h.area().toString(), '<area>'))
test('article', t => t.is(h.article().toString(), '<article></article>'))
test('aside', t => t.is(h.aside().toString(), '<aside></aside>'))
test('audio', t => t.is(h.audio().toString(), '<audio></audio>'))
test('b', t => t.is(h.b().toString(), '<b></b>'))
test('base', t => t.is(h.base().toString(), '<base>'))
test('bdi', t => t.is(h.bdi().toString(), '<bdi></bdi>'))
test('bdo', t => t.is(h.bdo().toString(), '<bdo></bdo>'))
test('blockquote', t => t.is(h.blockquote().toString(), '<blockquote></blockquote>'))
test('body', t => t.is(h.body().toString(), '<body></body>'))
test('br', t => t.is(h.br().toString(), '<br>'))
test('button', t => t.is(h.button().toString(), '<button></button>'))
test('canvas', t => t.is(h.canvas().toString(), '<canvas></canvas>'))
test('caption', t => t.is(h.caption().toString(), '<caption></caption>'))
test('cite', t => t.is(h.cite().toString(), '<cite></cite>'))
test('code', t => t.is(h.code().toString(), '<code></code>'))
test('col', t => t.is(h.col().toString(), '<col>'))
test('colgroup', t => t.is(h.colgroup().toString(), '<colgroup></colgroup>'))
test('data', t => t.is(h.data().toString(), '<data></data>'))
test('datalist', t => t.is(h.datalist().toString(), '<datalist></datalist>'))
test('dd', t => t.is(h.dd().toString(), '<dd></dd>'))
test('del', t => t.is(h.del().toString(), '<del></del>'))
test('details', t => t.is(h.details().toString(), '<details></details>'))
test('dfn', t => t.is(h.dfn().toString(), '<dfn></dfn>'))
test('dialog', t => t.is(h.dialog().toString(), '<dialog></dialog>'))
test('div', t => t.is(h.div().toString(), '<div></div>'))
test('dl', t => t.is(h.dl().toString(), '<dl></dl>'))
test('dt', t => t.is(h.dt().toString(), '<dt></dt>'))
test('em', t => t.is(h.em().toString(), '<em></em>'))
test('embed', t => t.is(h.embed().toString(), '<embed>'))
test('fieldset', t => t.is(h.fieldset().toString(), '<fieldset></fieldset>'))
test('figcaption', t => t.is(h.figcaption().toString(), '<figcaption></figcaption>'))
test('figure', t => t.is(h.figure().toString(), '<figure></figure>'))
test('footer', t => t.is(h.footer().toString(), '<footer></footer>'))
test('form', t => t.is(h.form().toString(), '<form></form>'))
test('h1', t => t.is(h.h1().toString(), '<h1></h1>'))
test('h2', t => t.is(h.h2().toString(), '<h2></h2>'))
test('h3', t => t.is(h.h3().toString(), '<h3></h3>'))
test('h4', t => t.is(h.h4().toString(), '<h4></h4>'))
test('h5', t => t.is(h.h5().toString(), '<h5></h5>'))
test('h6', t => t.is(h.h6().toString(), '<h6></h6>'))
test('head', t => t.is(h.head().toString(), '<head></head>'))
test('header', t => t.is(h.header().toString(), '<header></header>'))
test('hgroup', t => t.is(h.hgroup().toString(), '<hgroup></hgroup>'))
test('hr', t => t.is(h.hr().toString(), '<hr>'))
test('html', t => t.is(h.html().toString(), '<html></html>'))
test('i', t => t.is(h.i().toString(), '<i></i>'))
test('iframe', t => t.is(h.iframe().toString(), '<iframe></iframe>'))
test('img', t => t.is(h.img().toString(), '<img>'))
test('input', t => t.is(h.input().toString(), '<input>'))
test('ins', t => t.is(h.ins().toString(), '<ins></ins>'))
test('kbd', t => t.is(h.kbd().toString(), '<kbd></kbd>'))
test('label', t => t.is(h.label().toString(), '<label></label>'))
test('legend', t => t.is(h.legend().toString(), '<legend></legend>'))
test('li', t => t.is(h.li().toString(), '<li></li>'))
test('link', t => t.is(h.link().toString(), '<link>'))
test('main', t => t.is(h.main().toString(), '<main></main>'))
test('map', t => t.is(h.map().toString(), '<map></map>'))
test('mark', t => t.is(h.mark().toString(), '<mark></mark>'))
test('menu', t => t.is(h.menu().toString(), '<menu></menu>'))
test('meta', t => t.is(h.meta().toString(), '<meta>'))
test('meter', t => t.is(h.meter().toString(), '<meter></meter>'))
test('nav', t => t.is(h.nav().toString(), '<nav></nav>'))
test('noscript', t => t.is(h.noscript().toString(), '<noscript></noscript>'))
test('object', t => t.is(h.object().toString(), '<object></object>'))
test('ol', t => t.is(h.ol().toString(), '<ol></ol>'))
test('optgroup', t => t.is(h.optgroup().toString(), '<optgroup></optgroup>'))
test('option', t => t.is(h.option().toString(), '<option></option>'))
test('output', t => t.is(h.output().toString(), '<output></output>'))
test('p', t => t.is(h.p().toString(), '<p></p>'))
test('picture', t => t.is(h.picture().toString(), '<picture></picture>'))
test('pre', t => t.is(h.pre().toString(), '<pre></pre>'))
test('progress', t => t.is(h.progress().toString(), '<progress></progress>'))
test('q', t => t.is(h.q().toString(), '<q></q>'))
test('rp', t => t.is(h.rp().toString(), '<rp></rp>'))
test('rt', t => t.is(h.rt().toString(), '<rt></rt>'))
test('ruby', t => t.is(h.ruby().toString(), '<ruby></ruby>'))
test('s', t => t.is(h.s().toString(), '<s></s>'))
test('samp', t => t.is(h.samp().toString(), '<samp></samp>'))
test('script', t => t.is(h.script().toString(), '<script></script>'))
test('section', t => t.is(h.section().toString(), '<section></section>'))
test('select', t => t.is(h.select().toString(), '<select></select>'))
test('slot', t => t.is(h.slot().toString(), '<slot></slot>'))
test('small', t => t.is(h.small().toString(), '<small></small>'))
test('source', t => t.is(h.source().toString(), '<source>'))
test('span', t => t.is(h.span().toString(), '<span></span>'))
test('strong', t => t.is(h.strong().toString(), '<strong></strong>'))
test('style', t => t.is(h.style().toString(), '<style></style>'))
test('sub', t => t.is(h.sub().toString(), '<sub></sub>'))
test('summary', t => t.is(h.summary().toString(), '<summary></summary>'))
test('sup', t => t.is(h.sup().toString(), '<sup></sup>'))
test('table', t => t.is(h.table().toString(), '<table></table>'))
test('tbody', t => t.is(h.tbody().toString(), '<tbody></tbody>'))
test('td', t => t.is(h.td().toString(), '<td></td>'))
test('template', t => t.is(h.template().toString(), '<template></template>'))
test('textarea', t => t.is(h.textarea().toString(), '<textarea></textarea>'))
test('tfoot', t => t.is(h.tfoot().toString(), '<tfoot></tfoot>'))
test('th', t => t.is(h.th().toString(), '<th></th>'))
test('thead', t => t.is(h.thead().toString(), '<thead></thead>'))
test('time', t => t.is(h.time().toString(), '<time></time>'))
test('title', t => t.is(h.title().toString(), '<title></title>'))
test('tr', t => t.is(h.tr().toString(), '<tr></tr>'))
test('track', t => t.is(h.track().toString(), '<track>'))
test('u', t => t.is(h.u().toString(), '<u></u>'))
test('ul', t => t.is(h.ul().toString(), '<ul></ul>'))
test('var', t => t.is(h.var().toString(), '<var></var>'))
test('video', t => t.is(h.video().toString(), '<video></video>'))
test('wbr', t => t.is(h.wbr().toString(), '<wbr>'))
