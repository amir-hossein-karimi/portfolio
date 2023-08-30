const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/script.js",
  output: {
    path: path.resolve(__dirname, "build"),
    clean: true,
    assetModuleFilename: (p) => {
      console.log("output =====> ", p.filename.split("src/")[1]);
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
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets",
          filter: (resourcePath) => {
            return !resourcePath.includes("styles/");
          },
          to({ context, absoluteFilename }) {
            console.log({ absoluteFilename, context, path: path.sep });
            return "assets";
          },
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
