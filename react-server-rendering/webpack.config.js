var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: {
    app: './src/client',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js')
  ],
  module: {
    loaders: [
      {test: /\.js$/,
        loaders: ['babel?presets[]=react,presets[]=es2015'],
        include: [path.join(__dirname, 'src')]
      }
    ]
  }
}
