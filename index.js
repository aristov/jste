/**
 * @module jste
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
module.exports = require('./lib/elements')

if(typeof process !== 'undefined') {
  module.exports.__express = eval('require("./engine")')
}
