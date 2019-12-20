"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const versions_utils_1 = require("../../../shared/utils/version/versions.utils");
exports.getVersion = (req, res) => {
    const version = versions_utils_1.versionUtils.getPackageJSONVersion();
    res.status(200).json(version);
};
