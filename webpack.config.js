import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: ".src/index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css/i,
        user: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
};
