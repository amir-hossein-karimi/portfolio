const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/scripts/global/main.js",
    header: "./src/scripts/global/header.js",
    home: "./src/scripts/home/index.js",
    about: "./src/scripts/about/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    clean: true,
    assetModuleFilename: (p) => {
      return p.filename.split("src/")[1];
    },
  },
  module: {
    rules: [
      {
        test: /.(png|jpg|svg)$/,
        type: "asset/resource",
      },
      {
        test: /.(ttf|woff|woff2)$/,
        type: "asset/resource",
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        exclude: path.resolve(__dirname, "node_modules"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults",
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/templates/home.html"),
      chunks: ["main", "header", "home"],
      filename: "home/index.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/templates/about.html"),
      chunks: ["main", "header", "about"],
      filename: "about/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets",
          filter: (resourcePath) => {
            return !resourcePath.includes("styles/");
          },
          to: "assets",
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
