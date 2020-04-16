var path = require('path');

process.on('uncaughtException', function (err) {
  console.error(err.message || err);
  process.exit(1);
})

require('../dist/cli/git-cz.js').bootstrap({
  cliPath: path.join(__dirname, '../')
});
