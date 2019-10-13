const program = require('commander');

/**
 * Commands
 */

// create project command
require('./src/commands/create-project')(program);

// config commands
require('./src/commands/create-or-view-app-config')(program);

// launch dev mode
require('./src/commands/launch-dev-mode')(program);

// launch remote dev mode
require('./src/commands/launch-remote-dev-mode')(program);

// project name and version
const pkg = require('./package.json');
program.name(pkg.name);
program.version(pkg.version);

// parse CLI args
program.parse(process.argv);

// default to showing usage information
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
