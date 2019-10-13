const { expect } = require('chai');
const validation = require('../../src/utils/validation');

describe('CLI Args Validation', () => {
  describe('.validateArtifactId(artifactId)', () => {
    context('{ artifactId } is valid', () => {
      it('returns true', () => {
        // GIVEN
        const artifactId = 'com.valid';
        const expected = true;
        // WHEN
        const actual = validation.validateArtifactId(artifactId);
        // THEN
        expect(expected).to.equal(actual);
      });
    });

    context('{ artifactId } is invalid', () => {
      it('returns false', () => {
        // GIVEN
        const artifactId = 'Com/invalid';
        const expected = false;
        // WHEN
        const actual = validation.validateArtifactId(artifactId);
        // THEN
        expect(expected).to.equal(actual);
      });
    });
  });

  describe('.validateGroupId(groupId)', () => {
    context('{ groupId } is valid', () => {
      it('returns true', () => {
        // GIVEN
        const groupId = 'com.valid';
        const expected = true;
        // WHEN
        const actual = validation.validateGroupId(groupId);
        // THEN
        expect(expected).to.equal(actual);
      });
    });

    context('{ groupId } is invalid', () => {
      it('returns false', () => {
        // GIVEN
        const groupId = 'com/invalid';
        const expected = false;
        // WHEN
        const actual = validation.validateGroupId(groupId);
        // THEN
        expect(expected).to.equal(actual);
      });
    });
  });

  describe('.validateFileName(fileName)', () => {
    context('{ fileName } is valid', () => {
      it('returns true', () => {
        // GIVEN
        const fileName = 'file.name';
        const expected = true;
        // WHEN
        const actual = validation.validateFileName(fileName);
        // THEN
        expect(expected).to.equal(actual);
      });
    });

    context('{ fileName } is invalid', () => {
      it('returns false', () => {
        // GIVEN
        const fileName = 'com/invalid';
        const expected = false;
        // WHEN
        const actual = validation.validateFileName(fileName);
        // THEN
        expect(expected).to.equal(actual);
      });
    });
  });

  describe('.validateClassName(className)', () => {
    context('{ className } is valid', () => {
      it('returns true', () => {
        // GIVEN
        const className = 'com.valid';
        const expected = true;
        // WHEN
        const actual = validation.validateClassName(className);
        // THEN
        expect(expected).to.equal(actual);
      });
    });

    context('{ className } is invalid', () => {
      it('returns false', () => {
        // GIVEN
        const className = 'com/invalid';
        const expected = false;
        // WHEN
        const actual = validation.validateClassName(className);
        // THEN
        expect(expected).to.equal(actual);
      });
    });
  });

  describe('.validatePath(path)', () => {
    context('{ path } is valid', () => {
      it('returns true', () => {
        // GIVEN
        const path = '/com/valid';
        const expected = true;
        // WHEN
        const actual = validation.validatePath(path);
        // THEN
        expect(expected).to.equal(actual);
      });
    });

    context('{ path } is invalid', () => {
      it('returns false', () => {
        // GIVEN
        const path = 'com.invalid';
        const expected = false;
        // WHEN
        const actual = validation.validatePath(path);
        // THEN
        expect(expected).to.equal(actual);
      });
    });
  });
});
