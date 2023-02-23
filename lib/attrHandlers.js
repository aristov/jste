const CAMEL_CASE_RE = /([a-z])([A-Z])/g
const replace = (_, az, AZ) => {
  return az + '-' + AZ.toLowerCase()
}

module.exports = {
  /**
   * @param {string|{}} style
   * @return {string}
   */
  style(style) {
    if(typeof style === 'string') {
      return style
    }
    let result = '', prop, name
    for(prop in style) {
      name = prop.replace(CAMEL_CASE_RE, replace)
      result += `${ name }:${ style[prop] };`
    }
    return result
  },
}
