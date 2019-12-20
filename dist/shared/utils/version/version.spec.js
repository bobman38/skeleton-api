"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const versions_utils_1 = require("./versions.utils");
describe("versionUtils.getPackageVersion()", () => {
    it("should return a string", () => {
        expect(versions_utils_1.versionUtils.getPackageJSONVersion()).toEqual("1.0.0");
    });
});
