const Template = require('./Template')

class Script extends Template
{
  text(text) {
    this.innerHTML(text)
  }

  children(children) {
    this.innerHTML(children)
  }
}

module.exports = props => new Script('script', props)
