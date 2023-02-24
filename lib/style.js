const Template = require('./Template')

class Style extends Template
{
  /**
   * @param {string} children
   */
  children(children) {
    this.innerHTML(children)
  }
}

module.exports = props => new Style('style', props)
