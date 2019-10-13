module.exports = (file = 'application.properties.example') => {
  const mvn = require('maven').create({});
  return mvn.execute(`quarkus:generate-config -Dfile=${file}`).catch(() => {});
};
