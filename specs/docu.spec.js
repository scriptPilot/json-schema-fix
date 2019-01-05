const docu = require('../src/docu');

const tableHeader = '| Property | Type | Default Value |\n|:--- |:--- |:--- |\n';

const schema1 = {
  type: 'string',
  default: 'Text',
};
const markdown1 = `${tableHeader}| root | *string* | \`Text\` |`;

const schema2 = {
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
const markdown2 = `${tableHeader}| root | *object* | |\n| root.name | *string* | \`Name\` |\n| root.age | *number* | \`123\` |`;

test('should export function', () => {
  expect(typeof docu).toBe('function');
});
test('should render markdown properly', () => {
  expect(docu(schema1)).toBe(markdown1);
  expect(docu(schema2)).toBe(markdown2);
});
