const fs = require("fs");
const handlebars = require("handlebars");
const path = require("path");
const RefParser = require("json-schema-ref-parser");
const schema = require("./service.definition");

RefParser.dereference(schema).then(def => {

// app
const appTemplateStr = fs.readFileSync(path.join(__dirname, "templates", "app.ts.template"), "utf8");
const appTemplate = handlebars.compile(appTemplateStr);
const appStr = appTemplate({def});

fs.writeFileSync(path.join(__dirname, "..", "..", "payments", "src", "app.ts"), appStr);

// models
const modelsTemplateStr = fs.readFileSync(path.join(__dirname, "templates", "models.ts.template"), "utf8");
const modelsTemplate = handlebars.compile(modelsTemplateStr);
const modelsStr = modelsTemplate({models: Object.values(def.schemas)});

fs.writeFileSync(path.join(__dirname, "models.ts"), modelsStr);

// client
const clientTemplateStr = fs.readFileSync(path.join(__dirname, "templates", "client.ts.template"), "utf8");
const clientTemplate = handlebars.compile(clientTemplateStr);
const clientStr = clientTemplate({def: def});

fs.writeFileSync(path.join(__dirname, "client.ts"), clientStr);

// responseSender
const responseSenderTemplateStr = fs.readFileSync(path.join(__dirname, "templates", "responseSender.ts.template"), "utf8");
const responseSenderTemplate = handlebars.compile(responseSenderTemplateStr);
const responseSenderStr = responseSenderTemplate({def: def});

fs.writeFileSync(path.join(__dirname, "responseSender.ts"), responseSenderStr);

});
