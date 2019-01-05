const fix = require('../src/fix');

test('should export function', () => {
  expect(typeof fix).toBe('function');
});
test('should return data if valid according schema', () => {
  expect(fix({ type: 'string' }, 'OK')).toBe('OK');
});
test('should return created defaults if invalid according schema', () => {
  expect(fix({ type: 'string' }, 123)).toBe('');
});
