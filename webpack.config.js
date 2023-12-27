const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  }, // For more entry points
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // cleans directory when we build
  },
  plugins: [
    // Add new HtmlWebpackPlugins for new entry points
    new HtmlWebpackPlugin({
      title: "",
      template: "./src/index.html",
      filename: "index.html", // specify name om html file
      inject: "head", // injects js/ts files into the head,
      scriptLoading: "defer",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
