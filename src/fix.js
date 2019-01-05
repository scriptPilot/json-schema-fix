const create = require('./create');
const validate = require('./validate');

const fix = (schema, data) => (validate(schema, data) === null ? data : create(schema));

module.exports = fix;
