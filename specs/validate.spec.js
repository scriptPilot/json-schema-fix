const validate = require('../src/validate');

test('should export function', () => {
  expect(typeof validate).toBe('function');
});
test('should validate type "string" correctly', () => {
  expect(validate({ type: 'string' }, '')).toBe(null);
  expect(Array.isArray(validate({ type: 'string' }, 123))).toBe(true);
  expect(validate({ type: 'string', pattern: 'yes' }, 'yes')).toBe(null);
  expect(Array.isArray(validate({ type: 'string', pattern: 'yes' }, 'no'))).toBe(true);
});
test('should validate type "number" correctly', () => {
  expect(validate({ type: 'number' }, 123)).toBe(null);
  expect(Array.isArray(validate({ type: 'number' }, ''))).toBe(true);
});
test('should validate type "object" correctly', () => {
  expect(validate({ type: 'object' }, {})).toBe(null);
  expect(validate({ type: 'object' }, { prop: 'value' })).toBe(null);
  expect(Array.isArray(validate({ type: 'object' }, ''))).toBe(true);
});
test('should validate nested object correctly', () => {
  const schema = {
    type: 'object',
    properties: {
      string: {
        type: 'string',
      },
      number: {
        type: 'number',
      },
    },
  };
  const invalidData1 = { string: '', number: null };
  const invalidData2 = { string: null, number: 123 };
  const invalidData3 = { string: null, number: null };
  expect(validate(schema, { string: '', number: 123 })).toBe(null);
  expect(Array.isArray(validate(schema, {}))).toBe(true);
  expect(Array.isArray(validate(schema, invalidData1))).toBe(true);
  expect(Array.isArray(validate(schema, invalidData2))).toBe(true);
  expect(Array.isArray(validate(schema, invalidData3))).toBe(true);
});
test('should validate type "array" correctly', () => {
  expect(validate({ type: 'array' }, [])).toBe(null);
  expect(validate({ type: 'array' }, [1, 2, 3])).toBe(null);
  expect(Array.isArray(validate({ type: 'array' }, ''))).toBe(true);
});
test('should validate type "boolean" correctly', () => {
  expect(validate({ type: 'boolean' }, true)).toBe(null);
  expect(validate({ type: 'boolean' }, false)).toBe(null);
  expect(Array.isArray(validate({ type: 'boolean' }, ''))).toBe(true);
});
test('should validate type "null" correctly', () => {
  expect(validate({ type: 'null' }, null)).toBe(null);
  expect(Array.isArray(validate({ type: 'null' }, ''))).toBe(true);
});
