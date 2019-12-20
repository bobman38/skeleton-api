"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const versions_endpoints_1 = require("./endpoints/version/versions.endpoints");
const authentication_middlewares_1 = require("./middlewares/security/authentication.middlewares");
exports.routerV1 = express_1.Router();
exports.routerV1.use(authentication_middlewares_1.authenticate);
exports.routerV1.use("/version", versions_endpoints_1.versionEndpoints);
