import chardet from "chardet";
import path from "path";
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
            encodingAnalysis: {
              stdout: stdout ? chardet.analyse(Buffer.from(stdout)) : null,
              stderr: stderr ? chardet.analyse(Buffer.from(stderr)) : null,
            },
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
