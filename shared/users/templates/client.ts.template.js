module.exports = function(def) {
  let result = `// this is a generated file
import axios, { AxiosPromise } from 'axios';
import * as models from './models';\n\n`;

  result += def.routes.reduce((str, route) => {
    str += route.methods.map(method => {
      if(method.action.requestBody) {
        return `export const ${method.action.name} = (requestBody: models.${method.action.requestBody}): AxiosPromise => {\n return axios.${method.method}("${route.path}", requestBody);\n};\n`;
      } else {
        return `export const ${method.action.name} = (): AxiosPromise => {\n return axios.${method.method}("${route.path}");\n};\n`;
      }
    }).join("\n");
    return str;
  }, "");

  return result;
}

/*{{#each def.routes}}
{{#each methods}}
{{#if action.requestBody}}
export const {{action.name}} = (requestBody: models.{{action.requestBody}}): AxiosPromise => {
  return axios.{{method}}("{{../path}}", requestBody);
};
{{^}}
export const {{action.name}} = (): AxiosPromise => {
  return axios.{{method}}("{{../path}}");
};
{{/if}}
{{/each}}
{{/each}}*/