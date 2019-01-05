const index = require('../src/index');

test('should export object', () => {
  expect(typeof index).toBe('object');
  expect(typeof index).not.toBe(null);
});
