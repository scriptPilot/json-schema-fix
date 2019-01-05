const json = require('../src/index');

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      default: 'Name',
    },
    age: {
      type: 'number',
      default: '123',
    },
  },
};

const validYes = json.validate(schema, { name: 'Mr Nice Guy', age: 30 });
const validNo = json.validate(schema, { name: 'Mr Nice Guy', age: 'asdas' });

console.log(validYes); // eslint-disable-line no-console
console.log(validNo); // eslint-disable-line no-console
