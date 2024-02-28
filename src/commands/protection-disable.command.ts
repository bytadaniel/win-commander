import path from "path";
import { exec } from "child_process";

export class ProtectionDisableCommand {
  public async execute(): Promise<void> {
    return new Promise<void>((resolve) => {
      exec(
        path.resolve(__dirname, "../../scripts/protection-disable.exe"),
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
