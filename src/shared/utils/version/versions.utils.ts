import fs from "fs";
import path from "path";

const pathToPackageJSON = (): string =>
  path.resolve(__dirname, "../", "../", "../", "../", "package.json");

const getPackageJSON = (path: string) => {
  if (fs.existsSync(path)) {
    return JSON.parse(fs.readFileSync(path, { encoding: "utf8" }));
  }
};

const getPackageJSONVersion = () => {
  const path = pathToPackageJSON();
  return getPackageJSON(path).version;
};

export const versionUtils = { getPackageJSONVersion };
