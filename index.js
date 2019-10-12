const program = require('commander');

// COMMANDS
// create project command
const createProject = require('./src/commands/create-project');
createProject(program);

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
