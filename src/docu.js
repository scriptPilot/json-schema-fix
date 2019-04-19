const docu = (schema, path = ['root']) => {
  const header = path.length === 1 ? '| Property | Type / Pattern | Default Value | Description |\n|:--- |:--- |:--- |:--- |\n' : '';
  const lines = [];
  const typeOrPattern = schema.pattern === undefined ? schema.type : schema.pattern;
  const defaultValue = schema.default === undefined ? ' ' : ` \`${schema.default}\` `;
  const description = schema.description === undefined ? ' ' : ` ${schema.description} `;
  lines.push(`| ${path.join('.')} | *${typeOrPattern}* |${defaultValue}|${description}|`);
  if (schema.type === 'object' && schema.properties !== undefined) {
    Object.keys(schema.properties).forEach((key) => {
      lines.push(docu(schema.properties[key], [...path, key]));
    });
  }
  return header + lines.join('\n');
};

module.exports = docu;
