const config = {
  mode : 'none',
  entry : './index.js',
  output : {
    filename : 'jste.js',
    library : {
      name : 'jste',
      type : 'umd',
    },
    globalObject : 'this',
  },
  module : {
    rules : [
      {
        test : /\.js$/,
        use : {
          loader : 'babel-loader',
          options : {
            plugins : [
              '@babel/plugin-transform-runtime',
            ],
            presets : [
              '@babel/preset-env',
            ],
          },
        },
      },
    ],
  }
}

if(process.env.NODE_ENV === 'production') {
  config.mode = 'production'
  config.output.filename = 'jste.min.js'
}

module.exports = config
