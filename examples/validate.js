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

const isValid = json.validate(schema, { name: 'Mr Nice Guy', age: 30 });
const isNotValid1 = json.validate(schema, 'any wrong data');
const isNotValid2 = json.validate(schema, { name: 'Mr Nice Guy', age: 'any wrong data' });

console.log(isValid); // eslint-disable-line no-console
console.log(isNotValid1); // eslint-disable-line no-console
console.log(isNotValid2); // eslint-disable-line no-console
