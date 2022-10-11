const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { index: "./source/index.js", about: "./source/about.js" },
  output: {
    filename: "[name]_bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./source/index.html",
      filename:"./index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./source/about.html",
      filename:"./about.html",
      chunks: ["about"],
    }),
  ],
};
