const merge = require("webpack-merge");
const basicConfig = require("./webpack.common");
const webpack = require("webpack");
const TerserWebpackPlugin = require('terser-webpack-plugin');
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(basicConfig, {
  mode: "production",
  // devtool: "cheap-source-map",
  optimization: {
    // minimize: true,
    // minimizer: [
    //   new UglifyJSPlugin({
    //     uglifyOptions: {
    //       compress: {
    //         drop_console: true,
    //       },
    //       // mangle: false,
    //       output: {
    //         beautify: true
    //       }
    //     }
    //   })
    // ],
    minimizer: [
      new TerserWebpackPlugin()
    ],
    usedExports: true,
    // sideEffects: false
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
