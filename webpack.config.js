const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { enforce: "pre", test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/, options: { emitWarning: true } },
      { enforce: "pre", test: /\.jsx$/, loader: "eslint-loader", exclude: /node_modules/, options: { emitWarning: true } }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [HtmlWebpackPluginConfig]
}
