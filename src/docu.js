const docu = (schema, path = ['root']) => {
  const header = path.length === 1 ? '| Property | Type | Default Value |\n|:--- |:--- |:--- |\n' : '';
  const lines = [];
  const defaultValue = schema.default === undefined ? ' ' : ` \`${schema.default}\` `;
  lines.push(`| ${path.join('.')} | *${schema.type}* |${defaultValue}|`);
  if (schema.type === 'object' && schema.properties !== undefined) {
    Object.keys(schema.properties).forEach((key) => {
      lines.push(docu(schema.properties[key], [...path, key]));
    });
  }
  return header + lines.join('\n');
};

module.exports = docu;
