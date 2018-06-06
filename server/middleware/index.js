const { getDirectoryFiles } = require('../lib/dirs');

module.exports = getDirectoryFiles(__dirname).filter(v => v !== __filename).map(require);
