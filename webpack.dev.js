const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { merge } = require("webpack-merge");
const commonWebpackConfig = require("./webpack.common");

const devWebpackConfig = {
  mode: "development",
  output: {
    filename: "[name].js",
  },
  devServer: {
    static: "./build",
    port: 3000,
    open: true,
    historyApiFallback: {
      index: "/",
    },
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env", {}]],
              },
            },
          },
        ],
      },
      {
        test: /.s[ac]ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env", {}]],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  // plugins: [new BundleAnalyzerPlugin({})],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};

module.exports = merge(commonWebpackConfig, devWebpackConfig);
