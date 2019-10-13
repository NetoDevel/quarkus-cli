const buildMavenProps = require('../utils/build-maven-props');

module.exports = args => {
  const mvn = require('maven').create({});
  return mvn.execute(['clean', 'compile', 'quarkus:remote-dev'], buildMavenProps(args)).catch(() => {});
};
