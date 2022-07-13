/**
 * @param {string} filePath
 * @param {{}} params
 * @param {function} callback
 */
module.exports = (filePath, params, callback) => {
  try {
    const template = require(filePath)
    callback(null, template(params))
    params.cache || delete require.cache[filePath]
  }
  catch(err) {
    callback(err)
    console.error(err)
  }
}
