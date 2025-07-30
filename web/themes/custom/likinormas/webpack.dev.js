const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  watch: true,
}

module.exports = merge(common, devConfig)