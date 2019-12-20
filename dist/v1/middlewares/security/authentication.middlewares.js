"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configurations_1 = require("../../../shared/configurations/");
exports.authenticate = (req, res, next) => {
    if (req.headers["api-key"] &&
        req.headers["api-key"] === configurations_1.configurations.apiKey)
        next();
    else
        res.status(401).end();
};
