# JSON Schema Fix

JSON creation, validation, fix and documentation according schema.

## Installation

`npm install --save json-schema-fix`

## Schema

The schema has to be created according https://json-schema.org/.

Accepted/used properties are `type`, `properties` and `default`.

## Create JSON from schema

```
const json = require('json-schema-fix');

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      default: 'Name'
    },
    age: {
      type: 'number',
      default: '123'
    }
  }
};

const data = json.create(schema)
```

creates data:

```
{
  name: 'Name',
  age: 123
}
```
