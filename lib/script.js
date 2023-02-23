const Template = require('./Template')

class Script extends Template
{
  /**
   * @param {string} text
   */
  text(text) {
    this.innerHTML(text)
  }

  /**
   * @param {string} children
   */
  children(children) {
    this.innerHTML(children)
  }
}

module.exports = props => new Script('script', props)
