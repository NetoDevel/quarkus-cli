const launchDevModeService = require('../services/launch-dev-mode-service');

module.exports = program => {
  program
    .command('dev')
    .allowUnknownOption()
    .description(`Start Quarkus live coding mode. This will start your Quarkus application in development mode.\n`)
    .action(() => {
      launchDevModeService(process.argv.slice(3));
    });
};
