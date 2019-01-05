const json = require('./index');

describe('scripts/helper/json.js', () => {
  // Exported object
  test('should export object', () => {
    expect(typeof json).toBe('object');
    expect(typeof json).not.toBe(null);
  });
  describe('exported object', () => {
    // create() function
    test('should contain create() function', () => {
      expect(typeof json.create).toBe('function');
    });
    describe('create() function', () => {
      test('should handle type "string" correctly', () => {
        expect(json.create({ type: 'string' })).toBe('');
        expect(json.create({ type: 'string', default: 'Text' })).toBe('Text');
      });
      test('should handle type "number" correctly', () => {
        expect(json.create({ type: 'number' })).toBe(0);
        expect(json.create({ type: 'number', default: 123 })).toBe(123);
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
        expect(json.create({ type: 'object' })).toEqual({});
        expect(json.create(obj1)).toEqual({});
        expect(json.create(obj2)).toEqual({ string: '', number: 0 });
        expect(json.create(obj3)).toEqual({ object: { string: '', number: 0 } });
      });
      test('should handle type "array" correctly', () => {
        expect(json.create({ type: 'array' })).toEqual([]);
        expect(json.create({ type: 'array', default: [1, 2, 3] })).toEqual([1, 2, 3]);
      });
      test('should handle type "boolean" correctly', () => {
        expect(json.create({ type: 'boolean' })).toBe(true);
        expect(json.create({ type: 'boolean', default: true })).toBe(true);
        expect(json.create({ type: 'boolean', default: false })).toBe(false);
      });
      test('should handle type "null" correctly', () => {
        expect(json.create({ type: 'null' })).toBe(null);
      });
    });
    // validate() function
    test('should contain validate() function', () => {
      expect(typeof json.validate).toBe('function');
    });
    describe('validate() function', () => {
      test('should validate type "string" correctly', () => {
        expect(json.validate({ type: 'string' }, '')).toBe(null);
        expect(Array.isArray(json.validate({ type: 'string' }, 123))).toBe(true);
      });
      test('should validate type "number" correctly', () => {
        expect(json.validate({ type: 'number' }, 123)).toBe(null);
        expect(Array.isArray(json.validate({ type: 'number' }, ''))).toBe(true);
      });
      test('should validate type "object" correctly', () => {
        expect(json.validate({ type: 'object' }, {})).toBe(null);
        expect(json.validate({ type: 'object' }, { prop: 'value' })).toBe(null);
        expect(Array.isArray(json.validate({ type: 'object' }, ''))).toBe(true);
      });
      test('should validate type "array" correctly', () => {
        expect(json.validate({ type: 'array' }, [])).toBe(null);
        expect(json.validate({ type: 'array' }, [1, 2, 3])).toBe(null);
        expect(Array.isArray(json.validate({ type: 'array' }, ''))).toBe(true);
      });
      test('should validate type "boolean" correctly', () => {
        expect(json.validate({ type: 'boolean' }, true)).toBe(null);
        expect(json.validate({ type: 'boolean' }, false)).toBe(null);
        expect(Array.isArray(json.validate({ type: 'boolean' }, ''))).toBe(true);
      });
      test('should validate type "null" correctly', () => {
        expect(json.validate({ type: 'null' }, null)).toBe(null);
        expect(Array.isArray(json.validate({ type: 'null' }, ''))).toBe(true);
      });
    });
    // fix() function
    test('should contain fix() function', () => {
      expect(typeof json.fix).toBe('function');
    });
    describe('fix() function', () => {
      test('should return data if valid according schema', () => {
        expect(json.fix({ type: 'string' }, 'OK')).toBe('OK');
      });
      test('should return created defaults if invalid according schema', () => {
        expect(json.fix({ type: 'string' }, 123)).toBe('');
      });
    });
    // docu() function
    test('should contain docu() function', () => {
      expect(typeof json.docu).toBe('function');
    });
  });
});
