const validate = (schema, data, path = ['root']) => {
  if (schema.type === 'string') {
    return typeof data === 'string' ? null : [{ error: 'Should be a "string".', path: path.join('.') }];
  } if (schema.type === 'number') {
    return typeof data === 'number' ? null : [{ error: 'Should be a "number".', path: path.join('.') }];
  } if (schema.type === 'object') {
    if (schema.properties === undefined) {
      return typeof data === 'object' && data !== null ? null : [{ error: 'Should be an "object".', path: path.join('.') }];
    } if (typeof data !== 'object' || data === null) {
      return [{ error: 'Should be an "object".', path: path.join('.') }];
    }
    let propsValidationErrors = [];
    Object.keys(schema.properties).forEach((key) => {
      const propValidation = validate(schema.properties[key], data
        ? data[key]
        : undefined, [...path, key]);
      if (Array.isArray(propValidation)) {
        propsValidationErrors = propsValidationErrors.concat(propValidation);
      }
    });
    return propsValidationErrors.length === 0 ? null : propsValidationErrors;
  } if (schema.type === 'array') {
    return Array.isArray(data) ? null : [{ error: 'Should be an "array".', path: path.join('.') }];
  } if (schema.type === 'boolean') {
    return typeof data === 'boolean' ? null : [{ error: 'Should be a "boolean".', path: path.join('.') }];
  } if (schema.type === 'null') {
    return data === null ? null : [{ error: 'Should be "null".', path: path.join('.') }];
  }
  throw new Error('Unknown type in schema.');
};

module.exports = validate;
