var merge = require('webpack-merge');
var entries = require('./webpack/entries');
var outputs = require('./webpack/outputs');
var plugins = require('./webpack/plugins');
var loaders = require('./webpack/loaders');

module.exports = merge([
  entries.module(),
  outputs.module(),
  plugins(),
  loaders(),
]);
