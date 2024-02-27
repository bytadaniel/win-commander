import path from "path";
import { exec } from "child_process";

export class AltTabDisableCommand {
  public async execute(): Promise<void> {
    return new Promise<void>((resolve) => {
      exec(
        path.resolve(__dirname, "../scripts/alt-tab-disable.exe"),
        (error, stdout, stderr) => {
          console.log("AltTabDisableCommand", {
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
