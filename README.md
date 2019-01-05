# JSON Schema Fix

JSON creation, validation, fix and documentation according schema.

## Installation

`npm install --save json-schema-fix`

## Schema

The schema has to be created according https://json-schema.org/.

Accepted/used properties are `type`, `properties` and `default`.

## Usage

- [Create JSON from schema](#create-json-from-schema)
- [Validate JSON according schema](#validate-json-according-schema)
- [Fix JSON according schema](#fix-json-according-schema)

### Create JSON from schema

```
const json = require('json-schema-fix');

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

const data = json.create(schema);
```

data:

```
{
  name: 'Name',
  age: 123
}
```

### Validate JSON according schema

```
const json = require('json-schema-fix');

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
```

isValid:

```
null
```

isNotValid1:

```
[
  {
    error: 'Should be an "object".',
    path: 'root'
  }
]
```

isNotValid2:

```
[
  {
    error: 'Should be a "number".',
    path: 'root.age'
  }
]
```

### Fix JSON according schema

```
const json = require('json-schema-fix');

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
```

fixedData1:

```
{
  name: 'Name',
  age: '123'
}
```

fixedData2:

```
{
  name: 'Mr Nice Guy',
  age: '123'
}
```

fixedData3:

```
{
  name: 'Name',
  age: '123'
}
```
