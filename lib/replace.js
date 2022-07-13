const entities = {
  '"' : '&quot;',
  '&' : '&amp;',
  '<' : '&lt;',
  '>' : '&gt;',
}

/**
 * @param {string} c
 * @return {string}
 */
module.exports = c => entities[c]
