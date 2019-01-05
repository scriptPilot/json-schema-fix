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

const fixedData1 = json.fix(schema, undefined);
const fixedData2 = json.fix(schema, { name: 'Mr Nice Guy' });
const fixedData3 = json.fix(schema, { unrelevant: undefined });

console.log(fixedData1); // eslint-disable-line no-console
console.log(fixedData2); // eslint-disable-line no-console
console.log(fixedData3); // eslint-disable-line no-console
