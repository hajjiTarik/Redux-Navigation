var path = require('path');

const rootFolder = path.join(__dirname, '../');

module.exports = {
  root: path.resolve(rootFolder),
  modules: path.resolve(path.join(rootFolder, 'node_modules')),
  output: path.resolve(path.join(rootFolder, 'build')),
  templatesDirectory: path.resolve(path.join(rootFolder, 'config/templates')),
};
