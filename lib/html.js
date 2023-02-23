const Template = require('./Template')

const DOCTYPE = '<!doctype html>'

class Html extends Template
{
  /**
   * @return {string}
   */
  toString() {
    return this.__props.doctype ?
      DOCTYPE + super.toString() :
      super.toString()
  }

  doctype() {
    void null
  }
}

/**
 * @param {{}|[]|string|*} [props]
 * @return {string}
 */
module.exports = props => new Html('html', props)
