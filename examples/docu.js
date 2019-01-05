const json = require('../src/index');

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      default: 'Name',
      description: 'Name of the person.'
    },
    age: {
      type: 'number',
      default: '123',
      description: 'Age of the person.'
    },
  },
};

const markdownDocumentation = json.docu(schema);

console.log(markdownDocumentation); // eslint-disable-line no-console
