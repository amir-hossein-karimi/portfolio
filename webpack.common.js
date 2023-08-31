const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { validRoutes } = require("./src/constants/routes.js");

let entries = {};

validRoutes.forEach(({ route }) => {
  entries = {
    ...entries,
    [route]: `./src/scripts/${route}/index.js`,
  };
});

module.exports = {
  entry: {
    main: "./src/scripts/global/main.js",
    header: "./src/components/header/index.js",
    ...entries,
    footer: "./src/components/footer/index.js",
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
    ...validRoutes.map(
      ({ route, hasHeader = false, hasFooter = false }) =>
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, `src/templates/${route}.html`),
          chunks: [
            "main",
            ...(hasHeader ? ["header"] : []),
            route,
            ...(hasFooter ? ["footer"] : []),
          ],
          filename: `${route}/index.html`,
        })
    ),
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
