const merge = require('webpack-merge');
const basicConfig = require('./webpack.common');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(basicConfig, {
  devtool: 'cheap-source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true,
            unused: true
          },
          mangle: false,
          output: {
            beautify: true
          }
        }
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})