import fs from "fs";
import path from "path";

console.log({
  scriptAltDisable: path.resolve(
    __dirname,
    "../../scripts/alt-tab-disable.exe"
  ),
  scriptAltEnable: path.resolve(
    __dirname,
    "../../scripts/protection-enable.exe"
  ),
  scriptProtectionEnable: path.resolve(
    __dirname,
    "../../scripts/protection-enable.exe"
  ),
  scriptProtectionDisable: path.resolve(
    __dirname,
    "../../scripts/protection-disable.exe"
  ),
  files: fs.readdirSync(path.resolve(__dirname, "../../scripts")),
});

export const config = {
  paths: {
    // scriptAltDisable: "C:\\pccommander\\alt-tab-disable.exe",
    // scriptAltEnable: "C:\\pccommander\\alt-tab-enable.exe",
    // scriptProtectionEnable: "C:\\pccommander\\protection-enable.exe",
    // scriptProtectionDisable: "C:\\pccommander\\protection-disable.exe",
    scriptAltDisable: path.resolve(
      __dirname,
      "../../scripts/alt-tab-disable.exe"
    ),
    scriptAltEnable: path.resolve(
      __dirname,
      "../../scripts/protection-enable.exe"
    ),
    scriptProtectionEnable: path.resolve(
      __dirname,
      "../../scripts/protection-enable.exe"
    ),
    scriptProtectionDisable: path.resolve(
      __dirname,
      "../../scripts/protection-disable.exe"
    ),
  },
};
