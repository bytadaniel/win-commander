import path from "path";
import { exec } from "child_process";

export class AltTabEnableCommand {
  public async execute(): Promise<void> {
    return new Promise<void>((resolve) => {
      exec(
        path.resolve(__dirname, "../../scripts/alt-tab-enable.exe"),
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
