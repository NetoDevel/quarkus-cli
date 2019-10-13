const colors = require('colors');
const emoji = require('node-emoji');
const validation = require('../utils/validation');
const { showFormat, showInvalid } = require('../utils/show');
const viewAppConfigService = require('../services/view-app-config-service');
const generateAppConfigService = require('../services/generate-app-config-service');

module.exports = program => {
  program
    .command('config <sub-command>')
    .description(
      `Supported sub commands are: \n 1. "generate"  to generate a config file. Defaults to generating a ${colors.cyan(
        'application.properties.example'
      )} file \n 2. "view" to view Quarkus project ${colors.cyan('application.properties')} configuration file.\n`
    )
    .option('-f, --file <file>', `The file to generate. ${showFormat('^(w+.)*(w+)$')}`)
    .action((subCommand, options) => {
      if (subCommand === 'generate') {
        if (options.file && !validation.validateFileName(options.file)) {
          console.error(
            `${emoji.get('x')} The className ${showInvalid(options.className)} is invalid. ${showFormat(
              '^(w+.)*(w+)$'
            )}`
          );
          process.exit(1);
        }
        generateAppConfigService(options.file);
      } else if (subCommand === 'view') {
        viewAppConfigService();
      } else {
        console.error(`${emoji.get('no_entry_sign')} command "${subCommand}" not supported.`);
        process.exit(1);
      }
    });
};
