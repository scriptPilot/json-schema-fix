const create = require('../src/create');

test('should export function', () => {
  expect(typeof create).toBe('function');
});
test('should handle type "string" correctly', () => {
  expect(create({ type: 'string' })).toBe('');
  expect(create({ type: 'string', default: 'Text' })).toBe('Text');
});
test('should handle type "number" correctly', () => {
  expect(create({ type: 'number' })).toBe(0);
  expect(create({ type: 'number', default: 123 })).toBe(123);
});
test('should handle type "object" correctly', () => {
  const obj1 = { type: 'object', properties: {} };
  const obj2 = {
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
  const obj3 = {
    type: 'object',
    properties: {
      object: {
        type: 'object',
        properties: {
          string: {
            type: 'string',
          },
          number: {
            type: 'number',
          },
        },
      },
    },
  };
  expect(create({ type: 'object' })).toEqual({});
  expect(create(obj1)).toEqual({});
  expect(create(obj2)).toEqual({ string: '', number: 0 });
  expect(create(obj3)).toEqual({ object: { string: '', number: 0 } });
});
test('should handle type "array" correctly', () => {
  expect(create({ type: 'array' })).toEqual([]);
  expect(create({ type: 'array', default: [1, 2, 3] })).toEqual([1, 2, 3]);
});
test('should handle type "boolean" correctly', () => {
  expect(create({ type: 'boolean' })).toBe(true);
  expect(create({ type: 'boolean', default: true })).toBe(true);
  expect(create({ type: 'boolean', default: false })).toBe(false);
});
test('should handle type "null" correctly', () => {
  expect(create({ type: 'null' })).toBe(null);
});
