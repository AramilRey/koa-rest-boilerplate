const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const isDirectory = source => lstatSync(source).isDirectory();
const isFile = source => !isDirectory(source);
const getDirectoryPaths = source => readdirSync(source).map(name => join(source, name));
const getDirectories = source => getDirectoryPaths(source).filter(isDirectory);
const getDirectoryFiles = source => getDirectoryPaths(source).filter(isFile);

module.exports = {
  isDirectory,
  isFile,
  getDirectoryPaths,
  getDirectories,
  getDirectoryFiles,
};
