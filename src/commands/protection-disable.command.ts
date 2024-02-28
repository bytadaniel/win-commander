import path from "path";
import { exec } from "child_process";
import { config } from "../config";

export class ProtectionDisableCommand {
  public async execute(): Promise<void> {
    return new Promise<void>((resolve) => {
      exec(
        // path.resolve(__dirname, "../../scripts/protection-disable.exe"),
        config.paths.scriptProtectionDisable,
        (error, stdout, stderr) => {
          console.log("ProtectionDisableCommand", {
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
