import path from 'path';

const rootFolder = path.join(__dirname, '../');

export default {
  root: path.resolve(rootFolder),
  modules: path.resolve(path.join(rootFolder, 'node_modules')),
  product: path.resolve(path.join(rootFolder, 'app')),
  output: path.resolve(path.join(rootFolder, 'public')),
  serverOutput: path.resolve(path.join(rootFolder, 'build')),
  babelCacheDirectory: path.resolve(path.join(rootFolder, 'tmp/.babel')),
  templatesDirectory: path.resolve(path.join(rootFolder, 'config/templates')),
};
