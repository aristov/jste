const { NODE_ENV } = process.env
const JS_EXT = NODE_ENV === 'production' ? '.min.js' : '.js'

module.exports = {
  mode : NODE_ENV || 'none',
  entry : './index.js',
  output : {
    filename : 'htool' + JS_EXT,
    library : {
      name : 'htool',
      type : 'umd',
    },
    globalObject : 'this',
  },
}
