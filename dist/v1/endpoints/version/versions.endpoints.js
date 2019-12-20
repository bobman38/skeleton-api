"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const versions_controllers_1 = require("./versions.controllers");
exports.versionEndpoints = express_1.Router();
exports.versionEndpoints.get("/", versions_controllers_1.getVersion);
