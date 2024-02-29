import chardet from "chardet";
import path from "path";
import { exec } from "child_process";
import { config } from "../common/config";

export class ProtectionEnableCommand {
  public async execute(): Promise<any> {
    return new Promise<any>((resolve) => {
      exec(
        // path.resolve(__dirname, "../../scripts/protection-enable.exe"),
        config.paths.scriptProtectionEnable,
        (error, stdout, stderr) => {
          console.log("ProtectionEnableCommand", {
            error,
            stdout,
            stderr,
            encodingAnalysisStdout: stdout
              ? chardet.analyse(Buffer.from(stdout))
              : null,
            encodingAnalysisStderr: stderr
              ? chardet.analyse(Buffer.from(stderr))
              : null,
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
