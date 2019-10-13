const colors = require('colors');

function showFormat(format) {
  return `The accepted format is "${colors.cyan(colors.underline('/' + format + '/'))}"`;
}

function showInvalid(value) {
  return colors.red(value);
}

module.exports = { showFormat, showInvalid };
