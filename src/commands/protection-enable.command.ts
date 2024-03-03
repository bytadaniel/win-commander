import { exec } from "child_process";
import { config } from "../common/config";

export class ProtectionEnableCommand {
  public async execute(): Promise<CommandResponse> {
    return new Promise<CommandResponse>((resolve) => {
      exec(
        config.paths.scriptProtectionEnable,
        (error, stdout, stderr) => {
          console.log("ProtectionEnableCommand", {
            error,
            stdout,
            stderr,
          });
          resolve({
            error,
            stdout,
            stderr,
          });
        }
      );
    });
  }
}
