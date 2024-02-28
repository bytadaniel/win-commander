import chardet from "chardet";
import path from "path";
import { exec } from "child_process";

export class ProtectionEnableCommand {
  public async execute(): Promise<void> {
    return new Promise<void>((resolve) => {
      exec(
        path.resolve(__dirname, "../../scripts/protection-enable.exe"),
        (error, stdout, stderr) => {
          console.log("ProtectionEnableCommand", {
            error,
            stdout,
            stderr,
            encodingAnalysisStdout: stdout ? chardet.analyse(Buffer.from(stdout)) : null,
            encodingAnalysisStderr: stderr ? chardet.analyse(Buffer.from(stderr)) : null,
          });
          resolve();
        }
      );
    });
  }
}
