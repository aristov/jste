/**
 * @param {string} filePath
 * @param {{}} params
 * @param {function} callback
 */
module.exports = (filePath, params, callback) => {
  try {
    const template = require(filePath)
    const result = template(params)
    callback(null, result.toString())
    if(!params.cache) {
      delete require.cache[filePath]
    }
  }
  catch(err) {
    callback(err)
  }
}
