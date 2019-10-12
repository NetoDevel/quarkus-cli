const { expect } = require('chai');
const collectExtensions = require('../../src/utils/collect-extensions');

describe('Collect Extensions From CLI Arguments', () => {
  describe('.(extension, collectedExtensions)', () => {
    context('{ collectedExtensions } argument is undefined', () => {
      context(' {extension} argument is undefined', () => {
        it('returns an empty list', () => {
          // GIVEN
          const expected = [];
          // WHEN
          const collectedExtensions = collectExtensions(undefined, undefined);
          // THEN
          expect(expected).to.eql(collectedExtensions);
        });
      });

      context(' { extension } argument is defined', () => {
        context(' {extension } argument is a comma separated string', () => {
          it('returns a list of extension', () => {
            // GIVEN
            const expected = ['extension', 'second-extension'];
            // WHEN
            const collectedExtensions = collectExtensions('extension, second-extension ', undefined);
            // THEN
            expect(expected).to.eql(collectedExtensions);
          });
        });

        context('{ extension } argument does not contain comma', () => {
          it('returns a single list of extension', () => {
            // GIVEN
            const expected = ['extension'];
            // WHEN
            const collectedExtensions = collectExtensions('extension', undefined);
            // THEN
            expect(expected).to.eql(collectedExtensions);
          });
        });
      });
    });

    context('{ collectedExtensions } argument is defined', () => {
      context(' {extension} argument is undefined', () => {
        it('returns previous collected extensions', () => {
          // GIVEN
          const expected = ['extension'];
          // WHEN
          const collectedExtensions = collectExtensions(undefined, ['extension']);
          // THEN
          expect(expected).to.eql(collectedExtensions);
        });
      });

      context('{ extension } argument is defined', () => {
        context('{ extension } argument does not contain comma', () => {
          it('returns combined list of extensions', () => {
            // GIVEN
            const expected = ['extension', 'another-extension'];
            // WHEN
            const collectedExtensions = collectExtensions('extension', ['another-extension']);
            // THEN
            expect(expected).to.eql(collectedExtensions);
          });
        });

        context('{extension } argument is a comma separated string', () => {
          it('returns a list of extension', () => {
            // GIVEN
            const expected = ['extension', 'second-extension', 'third-extension'];
            // WHEN
            const collectedExtensions = collectExtensions('extension, second-extension ', ['third-extension']);
            // THEN
            expect(expected).to.eql(collectedExtensions);
          });
        });
      });
    });
  });
});
