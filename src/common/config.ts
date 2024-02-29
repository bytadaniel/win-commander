import path from "path";

const hardcodeScriptDirecotry = "C:\\pccommander\\";

export const config = {
  paths: {
    scriptAltEnable: path.resolve(
      hardcodeScriptDirecotry,
      "/scripts/alt-tab-enable.exe"
    ),
    scriptAltDisable: path.resolve(
      hardcodeScriptDirecotry,
      "/scripts/alt-tab-disable.exe"
    ),
    scriptProtectionEnable: path.resolve(
      hardcodeScriptDirecotry,
      "/scripts/protection-enable.exe"
    ),
    scriptProtectionDisable: path.resolve(
      hardcodeScriptDirecotry,
      "/scripts/protection-disable.exe"
    ),
  },
};
