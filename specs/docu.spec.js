const docu = require('../src/docu');

const tableHeader = '| Property | Type | Default Value | Description |\n|:--- |:--- |:--- |:--- |\n';

const schema1 = {
  type: 'string',
};
const markdown1 = `${tableHeader}| root | *string* | | |`;

const schema2 = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      default: 'Mr Nice Guy',
      description: 'Name of the person.',
    },
    age: {
      type: 'number',
      default: '30',
      description: 'Age of the person.',
    },
  },
};
const markdown2 = `${tableHeader}| root | *object* | | |\n`
  + '| root.name | *string* | `Mr Nice Guy` | Name of the person. |\n'
  + '| root.age | *number* | `30` | Age of the person. |';

test('should export function', () => {
  expect(typeof docu).toBe('function');
});
test('should render markdown properly', () => {
  expect(docu(schema1)).toBe(markdown1);
  expect(docu(schema2)).toBe(markdown2);
});
