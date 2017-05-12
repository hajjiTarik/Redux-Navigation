var webpack = require('webpack');
var env = process.env.NODE_ENV;
var path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0'],
        },
      },
    ],
  },
  entry: path.join(__dirname, 'dist/bundle.js'),
  devServer: {
    contentBase: path.join(__dirname, 'example'),
    compress: true,
    port: 9000,
  },
  output: {
    library: 'redux-navigation',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
};