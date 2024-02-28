import os from "os";
import { promisify } from "util";
import Registry from "winreg";

export enum ProtectionStatus {
  Disabled = "DISABLED",
  Enabled = "ENABLED",
}

export class GetProtectionStatusQuery {
  private readonly mapper = {
    0: ProtectionStatus.Disabled,
    1: ProtectionStatus.Enabled,
  };

  public async execute(): Promise<ProtectionStatus> {
    return this.getProtectionStatus();
  }

  private async getProtectionStatus(): Promise<ProtectionStatus> {
    const isWindows = os.platform() === "win32";

    console.log("GetProtectionStatusQuery", {
      isWindows,
      osPlatform: os.platform(),
    });

    return isWindows
      ? this.getProtectionStatusFromWinReg()
      : this.getMockedProtectionStatus();
  }

  private async getProtectionStatusFromWinReg(): Promise<ProtectionStatus> {
    const hasAccess = await this.hasRegAccess();
    console.log({ hasAccess });
    return hasAccess ? ProtectionStatus.Disabled : ProtectionStatus.Enabled;
  }

  private getMockedProtectionStatus(): ProtectionStatus {
    const randomStatus = Math.round(Math.random()) as 0 | 1;

    return this.mapper[randomStatus];
  }

  private async hasRegAccess(): Promise<boolean> {
    const registry = new Registry({
      hive: Registry.HKCU,
      key: "\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System",
    });

    return new Promise<boolean>((resolve) => {
      registry.values((error, items) => {
        console.log({
          items,
          type: typeof items,
        });

        // items is null in case we have no access ro windown registry
        resolve(typeof items === "object");
      });
    });
  }
}
