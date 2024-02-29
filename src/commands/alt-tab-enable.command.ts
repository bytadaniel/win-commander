import path from "path";
import { exec } from "child_process";
import { config } from "../common/config";

export class AltTabEnableCommand {
  public async execute(): Promise<void> {
    return new Promise<void>((resolve) => {
      exec(
        // path.resolve(__dirname, "../../scripts/alt-tab-enable.exe"),
        config.paths.scriptAltEnable,
        (error, stdout, stderr) => {
          console.log("AltTabEnableCommand", {
            error,
            stdout,
            stderr,
          });
          resolve();
        }
      );
    });
  }
}
