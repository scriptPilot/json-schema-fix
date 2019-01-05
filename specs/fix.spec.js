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
test('should handle nested data properly', () => {
  const schema = {
    type: 'object',
    properties: {
      string: {
        type: 'string',
        default: 'Text',
      },
      number: {
        type: 'number',
        default: 123,
      },
    },
  };
  expect(fix(schema, undefined)).toEqual({ string: 'Text', number: 123 });
  expect(fix(schema, { string: 'Given String', number: 'any wrong data' }))
    .toEqual({ string: 'Given String', number: 123 });
  expect(fix(schema, { number: 456 }))
    .toEqual({ string: 'Text', number: 456 });
  expect(fix(schema, { notRelevant: null }))
    .toEqual({ string: 'Text', number: 123 });
});
