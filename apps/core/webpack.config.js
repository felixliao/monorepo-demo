const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry: "./index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:3000/",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "host",
      shared: {
        react: {
          requiredVersion: deps.react,
          singleton: true,
        },
        "react-dom": {
          requiredVersion: deps["react-dom"],
          singleton: true,
        },
      },
    }),
  ],
  devServer: {
    static: "./dist",
    port: 3000,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
            targets: {
              chrome: "100",
            },
          },
        },
      },
    ],
  },
};

module.exports = config;
