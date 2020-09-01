const path = require("path");
const common = require("../webpack.common");
const { merge } = require("webpack-merge");
const { JSBASEPATH } = require('../build.config.js');

module.exports = merge(common, {
  // ENV
  mode: 'development',
  watch: true,
  // OUTPUT
  output: {
    filename: `${JSBASEPATH}[name].[contentHash].js`, // cache buster
    path: path.resolve(__dirname, "dist"),
  },
});