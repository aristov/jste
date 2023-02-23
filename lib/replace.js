const entities = {
  '&' : '&amp;',
  '<' : '&lt;',
  '>' : '&gt;',
  '"' : '&quot;',
}

/**
 * @param {string} c
 * @return {string}
 */
module.exports = c => entities[c]
