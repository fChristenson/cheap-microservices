module.exports = function (def) {
  const interfaces = Object.values(def.schemas).reduce((str, model) => {
    const fields = model.fields.map(field => {
      if(field.array) {
        return ` ${field.key}: ${field.type}[];\n`;
      } else {
        return ` ${field.key}: ${field.type};\n`;
      }
    }).join("")
  
    return str + `export interface ${model.interface} {\n${fields}}\n\n`;
  }, "");
  
  const models = Object.values(def.schemas).reduce((str, model) => {
    const params = model.fields.map(field => {
      if(field.array) {
        return `${field.key}: ${field.type}[]`;
      } else {
        return `${field.key}: ${field.type}`;
      }
    }).join(", ")
    const fields = Object.values(model.fields).map(field => `${field.key}`).join(", ");
  
    const body = `\n return {${fields}};`
  
    return str + `export const ${model.name} = (${params}) => {${body}\n}\n\n`;
  }, "");

return `// this is a generated file

// Interfaces
${interfaces}

// models
${models}
  `;
}
