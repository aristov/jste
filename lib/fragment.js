const Template = require('./Template')

class Fragment extends Template
{
  /**
   * @return {string}
   */
  toString() {
    return this.__content
  }
}

module.exports = props => new Fragment(null, props)
