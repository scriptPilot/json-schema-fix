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

const markdownDocumentation = json.docu(schema);

console.log(markdownDocumentation); // eslint-disable-line no-console
