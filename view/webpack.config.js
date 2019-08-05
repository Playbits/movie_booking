require("./.env");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: ["./src/js/index.js", "./src/sass/main.scss"],
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodule_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|json)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"] // ?name=[name].[ext] is only necessary to preserve the original file name
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      exclude: /node_modules/,
      filename: "./index.html",
      favicon: "./public/favicon.ico",
      manifest: "./public/manifest.json"
    })
  ]
};
