const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const basicConfig = require('./webpack.common');

module.exports = merge(basicConfig, {
  mode:'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    port: 8080,
    open: true,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
})