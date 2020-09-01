const path = require("path");
const common = require("../webpack.common");
const { merge } = require("webpack-merge");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { JSBASEPATH } = require('../build.config.js');


module.exports = merge(common, {
  // ENV
  mode: 'production',
  // OUTPUT
  output: {
    filename: `${JSBASEPATH}[name].[contentHash].js`, //cache buster
    path: path.resolve(__dirname, "dist"),
  },

  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),   // css minimizer
      new TerserPlugin(),                     // js minimizer
    ],
  },
});
