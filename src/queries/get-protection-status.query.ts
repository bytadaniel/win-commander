import path from "path";
import { exec } from "child_process";

export enum ProtectionStatus {
  Disabled,
  Enabled,
}

export class GetProtectionStatusQuery {
  public async execute(): Promise<ProtectionStatus> {
    return new Promise<ProtectionStatus>((resolve) => {
      console.log(path.resolve(__dirname, "../scripts/protection-status.sh"));

      exec(
        path.resolve(__dirname, "../scripts/protection-status.sh"),
        (error, stdout, stderr) => {
          console.log("ProtectionEnableCommand", {
            error,
            stdout,
            stderr,
          });

          resolve(
            [ProtectionStatus.Disabled, ProtectionStatus.Enabled][
              Math.round(Math.random())
            ]
          );
        }
      );
    });
  }
}
