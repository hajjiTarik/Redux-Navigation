var paths = require('../../paths');

module.exports = {
  public: () => ({
    output: {
      filename: 'bundle.js',
      library: 'public',
      libraryTarget: 'umd',
      path: paths.output,
    },
  }),
  module: () => ({
    output: {
      filename: 'redux-navigation.js',
      library: 'redux-navigation',
      libraryTarget: 'umd',
      path: paths.moduleOutput,
    },
  }),
};
