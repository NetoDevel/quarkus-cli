const ora = require('ora');
const http = require('https');
const zip = require('unzipper');
const colors = require('colors');
const emoji = require('node-emoji');
const querystring = require('querystring');

module.exports = (destination, options) => {
  const spinner = ora({
    text: `Creating Quarkus project at into ${destination}\n`,
    color: 'green'
  }).start();

  const query = querystring.stringify(options);
  return http.get('https://code.quarkus.io/api/config', configResponse => {
    const error = configResponse.statusCode != 200;
    let configRawData = '';
    configResponse.on('data', chunk => {
      configRawData += chunk.toString();
    });

    configResponse.on('end', () => {
      if (error) {
        spinner.stop();
        console.error(`${emoji.get('x')} Unable to process request because an error occurred`);
        console.error(configRawData);
        process.exit(1);
      }

      const { quarkusVersion } = JSON.parse(configRawData);

      return http.get(`https://code.quarkus.io/api/download?${query}`, response => {
        if (response.headers['content-type'].indexOf('application/zip') === -1) {
          let error = '';
          response.on('data', data => {
            error += data.toString();
          });
          response.on('end', () => {
            spinner.stop();
            console.error(`${emoji.get('x')} Unable to process request because an error occurred`);
            console.error(error);
            process.exit(1);
          });
          return;
        }

        response
          .pipe(
            zip.Extract({
              path: destination
            })
          )
          .on('finish', () => {
            spinner.stop();
            console.log(
              `${emoji.get(
                'white_check_mark'
              )} Quarkus application project successfully create in the "${colors.underline(
                colors.bold(destination)
              )}" directory.`
            );
            console.log(
              `${emoji.get('computer')} You can optionally visit Quarkus website at "${colors.underline(
                colors.bold('https://quarkus.io')
              )}" to get started.`
            );
            console.log(
              `${emoji.get('computer')} In the project directory, run ${colors.green(
                './mvnw compile quarkus:dev'
              )} and start coding on top of Quarkus ${colors.cyan(
                'v.' + quarkusVersion
              )} k8s and Cloud native Java stack ${emoji.get('cloud')} `
            );
          });
      });
    });
  });
};
