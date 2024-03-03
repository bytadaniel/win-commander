import { exec } from "child_process";
import { config } from "../common/config";

export class AltTabDisableCommand {
  public async execute(): Promise<CommandResponse> {
    return new Promise<CommandResponse>((resolve) => {
      exec(
        config.paths.scriptAltDisable,
        (error, stdout, stderr) => {
          console.log("AltTabDisableCommand", {
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
