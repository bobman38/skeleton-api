"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pathToPackageJSON = () => path_1.default.resolve(__dirname, "../", "../", "../", "../", "package.json");
const getPackageJSON = (path) => {
    if (fs_1.default.existsSync(path)) {
        return JSON.parse(fs_1.default.readFileSync(path, { encoding: "utf8" }));
    }
};
const getPackageJSONVersion = () => {
    const path = pathToPackageJSON();
    return getPackageJSON(path).version;
};
exports.versionUtils = { getPackageJSONVersion };
