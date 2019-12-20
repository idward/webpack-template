const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: function() {
      console.log("AAAAAAA:", process.env.NODE_ENV);
      return process.env.NODE_ENV === "production"
        ? "[name].[chunkhash].js"
        : "[name].[hash].js";
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { modules: false }],
                "@babel/preset-react"
              ]
            }
          }
        ]
      },
      {
        test: /\.(sc|sa)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "css-hot-loader"
          },
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5000
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'Webpack Tour',
      filename: "index.html",
      template: path.resolve(__dirname, "public", "index.html")
      // chunks:['two'] for multiple entry and inserted to different html page
    }),
    new MiniCssExtractPlugin({
      filename:
        process.env.NODE_ENV === "production"
          ? "[name].[chunkhash].css"
          : "[name].css"
    })
  ]
};
