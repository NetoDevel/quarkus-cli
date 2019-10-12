const colors = require('colors');
const emoji = require('node-emoji');
const validation = require('../utils/validation');
const collectExtensions = require('../utils/collect-extensions');
const createProjectService = require('../services/create-project-service');

module.exports = program => {
  program
    .command('init [destination]')
    .alias('create')
    .description(
      'Create a new Quarkus project into a given directory specified as parameter. Defaults to current creating the project in the current directory.'
    )
    .option(
      '-e, --extensions <extension>',
      'The Quarkus extension to add. \n This value can be used several times to two or more extensions need to be added.\nA list can also be supplied by providing a comma separated list of extensions.\n',
      collectExtensions
    )
    .option('-g, --group-id <groupId>', `Quarkus project grougId. ${showFormat('^(w+.)*(w+)$')}`, 'com')
    .option(
      '-a, --artifact-id <artifactId>',
      `Quarkus project artifact id. ${showFormat('^[a-z][a-z0-9-._]*$')}`,
      'app'
    )
    .option('-v, --app-version <appVersion>', 'Quarkus project version', '1.0.0-SNAPSHOT')
    .option(
      '-c, --class-name <className>',
      `Quarkus rest resource class name. ${showFormat('^(w+.)*(w+)$')}`,
      'AppResource'
    )
    .option(
      '-p, --path <path>',
      `Quarkus rest endpoint path. ${showFormat("^/([a-z0-9-._~%!$&'()*+,;=:@]+/?)*$")}`,
      '/hello'
    )
    .action((destination, options) => {
      destination = destination || process.cwd();
      if (!validation.validateGroupId(options.groupId)) {
        console.error(
          `${emoji.get('x')} The groupId ${showInvalid(options.groupId)} is invalid. ${showFormat('^(w+.)*(w+)$')}`
        );
        process.exit(1);
      }

      if (!validation.validateArtifactId(options.artifactId)) {
        console.error(
          `${emoji.get('x')} The artifactId ${showInvalid(options.artifactId)} is invalid. ${showFormat(
            '^[a-z][a-z0-9-._]*$'
          )}`
        );
        process.exit(1);
      }

      if (!validation.validateClassName(options.className)) {
        console.error(
          `${emoji.get('x')} The className ${showInvalid(options.className)} is invalid. ${showFormat('^(w+.)*(w+)$')}`
        );
        process.exit(1);
      }

      if (!validation.validatePath(options.path)) {
        console.error(
          `${emoji.get('x')} The path ${showInvalid(options.path)} is invalid. ${showFormat(
            "^/([a-z0-9-._~%!$&'()*+,;=:@]+/?)*$"
          )}`
        );
        process.exit(1);
      }

      createProjectService(destination, {
        e: options.extensions,
        g: options.groupId,
        a: options.artifactId,
        v: options.appVersion,
        p: options.path,
        c: options.groupId + '.' + options.className
      });
    });
};

function showFormat(format) {
  return `The accepted format is "${colors.cyan(colors.underline('/' + format + '/'))}"`;
}

function showInvalid(value) {
  return colors.red(value);
}
