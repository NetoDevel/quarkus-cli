const launchRemoteDevModeService = require('../services/launch-remote-dev-mode-service');

module.exports = program => {
  program
    .command('remote-dev')
    .allowUnknownOption()
    .description(`Start Quarkus app in remote mode.\n`)
    .action(() => {
      launchRemoteDevModeService(process.argv.slice(3));
    });
};
