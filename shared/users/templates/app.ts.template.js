module.exports = function(def) {
  const routes = def.routes.reduce((str, route) => {
    str += route.methods.map(method => {
      return `app.${method.method}("${route.path}", actions.${method.action.name});\n`;
    }).join("")
    return str;
  }, "");

return `// this is a generated file
import express, { Response, Request } from "express";
import * as actions from './actions';

export const app = express();

app.use(express.json());

${routes}

app.use((_: Request, res: Response) => {
  res.status(404).json({error: "not found"});
});

app.use((error: Error, _: Request, res: Response) => {
  res.status(500).json({error: error.message});
});
  `;
}
