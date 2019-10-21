const { expect } = require('chai');
const buildMavenProps = require('../../src/utils/build-maven-props');

describe('Build Maven Props', () => {
  describe('.(args)', () => {
    context('{ args } is undefined', () => {
      it('returns an empty object', () => {
        // GIVEN
        const expected = {};
        // WHEN
        const mavenProps = buildMavenProps(undefined);
        // THEN
        expect(expected).to.eql(mavenProps);
      });
    });

    context('{ args } is empty', () => {
      it('returns an empty object', () => {
        // GIVEN
        const expected = {};
        // WHEN
        const mavenProps = buildMavenProps([]);
        // THEN
        expect(expected).to.eql(mavenProps);
      });
    });

    context('{ args } is contains elements', () => {
      it('returns an object representing properties passed to maven invocation', () => {
        // GIVEN
        const expected = {
          mambo: 'poa',
          hello: 'world',
          bonjour: 'monde',
          arigato: true
        };
        // WHEN
        const mavenProps = buildMavenProps(['-Dmambo=poa', '-Dhello=world', '-Dbonjour=monde', '-Darigato']);
        // THEN
        expect(expected).to.eql(mavenProps);
      });
    });
  });
});
