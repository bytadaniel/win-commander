import path from "path";
import { exec } from "child_process";
import { config } from "../common/config";

export class ProtectionDisableCommand {
  public async execute(): Promise<CommandResponse> {
    return new Promise<CommandResponse>((resolve) => {
      exec(
        config.paths.scriptProtectionDisable,
        (error, stdout, stderr) => {
          console.log("ProtectionDisableCommand", {
            error,
            stdout,
            stderr,
          });
          resolve({
            error,
            stdout,
            stderr
          });
        }
      );
    });
  }
}
