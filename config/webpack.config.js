var webpack = require('webpack');
var env = process.env.NODE_ENV;
var path = require('path');
var paths = require('./paths.js');

const rootFolder = path.join(__dirname, '../');
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
  entry: path.join(__dirname, '../example/src/index.js'),
  output: {
    filename: 'bundle.js',
    library: 'redux-navigation',
    libraryTarget: 'umd',
    path: path.resolve(path.join(rootFolder, 'build')),
  },
  devServer: {
    contentBase: paths.output,
    compress: true,
    hot: true,
    overlay: true,
    stats: 'errors-only',
    watchContentBase: true,
    port: 9000,
    host: 'localhost',
    setup: (app) => {
      app.set('views', paths.templatesDirectory);
      app.set('view engine', 'ejs');
      app.get('/', (_, res) => (
        res.render('index',{
          asset: 'bundle.js',
        })
      ));
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
};