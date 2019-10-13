const fs = require('fs');
const path = require('path');
const colors = require('colors');
const emoji = require('node-emoji');

module.exports = () => {
  const configFile = path.join('src', 'main', 'resources', 'application.properties');
  if (!fs.existsSync(configFile)) {
    console.error(
      `${emoji.get('no_entry_sign')} Quarkus application configuration file ${colors.cyan(
        configFile
      )} not found in the current directory ${colors.cyan(process.cwd())}`
    );
    process.exit(1);
  }

  const content = fs.readFileSync(configFile);
  console.log(content);
};
