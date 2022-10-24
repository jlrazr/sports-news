const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: 3001,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        loader: "file-loader",
        options: {
          outputPath: "assets/images",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "PGD Sports News",
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name]-[contenthash].js",
    clean: true,
  },
};
