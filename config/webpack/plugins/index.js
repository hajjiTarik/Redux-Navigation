var webpack = require('webpack');
var package = require('../../../package.json');

module.exports = () => ({
  plugins: [
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(package.version),
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]
})