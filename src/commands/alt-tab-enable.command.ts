import path from "path";
import { exec } from "child_process";
import { config } from "../common/config";

export class AltTabEnableCommand {
  public async execute(): Promise<CommandResponse> {
    return new Promise<CommandResponse>((resolve) => {
      exec(
        config.paths.scriptAltEnable,
        (error, stdout, stderr) => {
          console.log("AltTabEnableCommand", {
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
