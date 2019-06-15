module.exports = function(def) {
  let result = `// this is a generated file
import * as models from './models';
import { Response } from "express";\n\n`;

  result += def.routes.reduce((str, route) => {
    return route.methods.map((method) => {
      if(method.action.response.body) {
        return str + `export const ${method.action.name} = (res: Response, body: models.${method.action.response.body}) => {\n return res.status(${method.action.response.status}).json(body);\n};\n\n`
      } else {
        return str + `export const ${method.action.name} = (res: Response) => {\n return res.status(${method.action.response.status}).json();\n};\n\n`
      }
    }).join("");
  }, "");

  return result;
}
