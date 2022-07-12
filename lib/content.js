/**
 * @param {*} children
 * @return {string}
 */
function content(children) {
  if(!children) {
    return ''
  }
  if(!Array.isArray(children)) {
    return children
  }
  let html = ''
  let child
  for(child of children) {
    html += content(child)
  }
  return html
}

module.exports = content
