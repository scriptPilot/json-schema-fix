const create = require('./create');
const validate = require('./validate');

const fix = (schema, data) => {
  if (schema.type === 'object' && schema.properties !== undefined) {
    const resObject = {};
    Object.keys(schema.properties).forEach((key) => {
      resObject[key] = fix(schema.properties[key], data ? data[key] : undefined);
    });
    return resObject;
  }
  return validate(schema, data) === null ? data : create(schema);
};

module.exports = fix;
