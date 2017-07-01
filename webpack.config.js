const path = require('path')

module.exports = {
  entry: {
    popup: path.resolve(__dirname, 'src/popup.js'),
    background: path.resolve(__dirname, 'src/background.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [{
      test: /\.js/,
      loader: 'babel-loader'
    }, {
      test: [/\.html$/, /\.json$/, /\.png$/],
      loader: 'file-loader',
      options: { name: '[name].[ext]' }
    }]
  }
}
