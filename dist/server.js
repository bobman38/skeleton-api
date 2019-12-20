"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const configurations_1 = require("./shared/configurations");
app_1.app.listen(configurations_1.configurations.port, () => console.log(`listening on port ${configurations_1.configurations.port}`));
