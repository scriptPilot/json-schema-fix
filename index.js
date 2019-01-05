const create = (schema, path = ['root']) => {
  if (schema.type === 'string') {
    return schema.default !== undefined ? schema.default : '';
  } if (schema.type === 'number') {
    return schema.default !== undefined ? schema.default : 0;
  } if (schema.type === 'object') {
    if (typeof schema.properties === 'object' && schema.properties !== null) {
      const returnObject = {};
      Object.keys(schema.properties).forEach((key) => {
        returnObject[key] = create(schema.properties[key], [...path, key]);
      });
      return returnObject;
    }
    return schema.default !== undefined ? schema.default : {};
  } if (schema.type === 'array') {
    return schema.default !== undefined ? schema.default : [];
  } if (schema.type === 'boolean') {
    return schema.default !== undefined ? schema.default : true;
  } if (schema.type === 'null') {
    return null;
  }
  throw new Error('Unknown type in schema.');
};

const validate = (schema, data) => {
  const errors = [];
  if (schema.type === 'string') {
    if (typeof data !== 'string') errors.push('Should be a "string".');
  } else if (schema.type === 'number') {
    if (typeof data !== 'number') errors.push('Should be a "number".');
  } else if (schema.type === 'object') {
    if (typeof data !== 'object' || data === null) errors.push('Should be an "object".');
  } else if (schema.type === 'array') {
    if (!Array.isArray(data)) errors.push('Should be an "array".');
  } else if (schema.type === 'boolean') {
    if (typeof data !== 'boolean') errors.push('Should be a "boolean".');
  } else if (schema.type === 'null') {
    if (data !== null) errors.push('Should be "null".');
  } else {
    throw new Error('Unknown type in schema.');
  }
  return errors.length > 0 ? errors : null;
};

const fix = (schema, data) => (validate(schema, data) === null ? data : create(schema));

const docu = () => {

};

module.exports = {
  create(schema) {
    return create(schema);
  },
  validate(schema, data) {
    return validate(schema, data);
  },
  fix(schema, data) {
    return fix(schema, data);
  },
  docu() {
    return docu();
  },
};
