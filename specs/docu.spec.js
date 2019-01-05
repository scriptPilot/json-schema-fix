const docu = require('../src/docu');

test('should export function', () => {
  expect(typeof docu).toBe('function');
});
