const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const emoji = require('node-emoji');
let destination = process.argv[2] || '';
const testArtifact = 'test-artifact';

const { spawn } = require('child_process');
const createProject = spawn(`node`, ['bin/quarkus-cli.js', 'init', destination, '-a', testArtifact]);

let output = '';

createProject.stdout.on('data', data => {
  output += data.toString();
});

createProject.stderr.on('data', data => {
  output += data.toString();
});

createProject.on('close', code => {
  console.log(output);
  expect(code).to.equal(0);
  destination = destination || process.cwd();

  // assert console output
  expect(output.indexOf(`Creating Quarkus project at into ${destination}`)).to.not.equal(-1);
  expect(output.indexOf('Quarkus application project successfully created ')).to.not.equal(-1);
  expect(output.indexOf(emoji.get('white_check_mark'))).to.not.equal(-1);
  expect(output.indexOf(emoji.get('computer'))).to.not.equal(-1);
  expect(output.indexOf(emoji.get('cloud'))).to.not.equal(-1);
  expect(output.indexOf('https://quarkus.io')).to.not.equal(-1);
  expect(output.indexOf('./mvnw compile quarkus:dev')).to.not.equal(-1);
  const outDir = path.join(destination, testArtifact);

  // assert directory output
  expect(fs.existsSync(outDir)).to.equal(true);
  const files = ls(outDir, []);

  expect(files.length).to.not.equal(0);
  expect(files.find(file => file.includes('pom.xml'))).to.not.equal(undefined);
  expect(files.find(file => file.includes('.gitignore'))).to.not.equal(undefined);
  expect(files.find(file => file.includes('.dockerignore'))).to.not.equal(undefined);
  expect(files.find(file => file.includes('src'))).to.not.equal(undefined);
  expect(files.find(file => file.includes('main'))).to.not.equal(undefined);
  expect(files.find(file => file.includes('docker'))).to.not.equal(undefined);
  expect(files.find(file => file.includes('Dockerfile'))).to.not.equal(undefined);
  expect(files.find(file => file.includes('resources'))).to.not.equal(undefined);
  expect(files.find(file => file.includes('test/'))).to.not.equal(undefined);
  expect(files.find(file => file.includes('.java'))).to.not.equal(undefined);
});

function ls(dir, results) {
  const stats = fs.statSync(dir);
  if (!stats.isDirectory()) {
    return [];
  }

  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fileName = path.join(dir, file);
    results.push(fileName);
    ls(fileName, results);
  });

  return results;
}
