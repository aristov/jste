/**
 * @module jste
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
module.exports = require('./lib/jste')

if(typeof window === 'undefined') {
  module.exports.__express = eval('require("./engine")')
}
