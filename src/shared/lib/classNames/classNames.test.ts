import { classNames } from '.';

describe('classNames', () => {
   test('basic', () => {
      expect(classNames('someClass')).toBe('someClass');
   });
   test('with mods', () => {
      expect(classNames('someClass', { additional: true, first: false })).toBe('someClass additional');
   });
   test('with additional class', () => {
      expect(classNames('someClass', { additional: undefined, test: true }, ['first', 'two'])).toBe('someClass test first two');
   });
   test('full', () => {
      expect(classNames('someClass', { additional: true }, ['first', 'two'])).toBe('someClass additional first two');
   });
});
