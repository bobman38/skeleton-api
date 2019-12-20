"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router_1 = require("./v1/router");
exports.router = express_1.Router();
exports.router.use("/v1", router_1.routerV1);
