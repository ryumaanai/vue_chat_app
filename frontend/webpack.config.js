const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve("../public", "javascripts"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
