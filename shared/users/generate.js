const fs = require("fs");
const path = require("path");
const RefParser = require("json-schema-ref-parser");
const schema = require("./service.definition");
const apptemplate = require("./templates/app.ts.template");
const modelstemplate = require("./templates/models.ts.template");
const clienttemplate = require("./templates/client.ts.template");
const responseSendertemplate = require("./templates/responseSender.ts.template");

RefParser.dereference(schema).then(def => {
// app
fs.writeFileSync(path.join(__dirname, "..", "..", "users", "src", "app.ts"), apptemplate(def));

// models
fs.writeFileSync(path.join(__dirname, "models.ts"), modelstemplate(def));

// client
fs.writeFileSync(path.join(__dirname, "client.ts"), clienttemplate(def));

// responseSender
fs.writeFileSync(path.join(__dirname, "responseSender.ts"), responseSendertemplate(def));
});
