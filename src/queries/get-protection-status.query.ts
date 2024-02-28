import os from "os";
import Registry from "winreg";

export enum ProtectionStatus {
  Disabled = "DISABLED",
  Enabled = "ENABLED",
}

export class GetProtectionStatusQuery {
  public async execute(): Promise<ProtectionStatus> {
    const protectionStatus = await this.getProtectionStatus();

    return this.mapProtectionStatus(protectionStatus);
  }

  private async getProtectionStatus(): Promise<number> {
    const isWindows = os.platform() === "win32";

    console.log("GetProtectionStatusQuery", {
      isWindows,
      osPlatform: os.platform(),
    });

    return isWindows
      ? this.getProtectionStatusFromWinReg()
      : this.getMockedProtectionStatus();
  }

  private async getProtectionStatusFromWinReg(): Promise<number> {
    const registry = new Registry({
      hive: Registry.HKCU,
      key: "\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\System",
      // key: "\\Software\\Microsoft\\Windows\\CurrentVersion\\Run",
    });

    await new Promise<void>((resolve) => {
      registry.values((err, items) => {
        console.log({
          err,
          items,
          values: items.map((item) => [item.name, item.value]),
        });
        resolve();
      });
    });

    return new Promise<number>((resolve, reject) => {
      registry.get("DisableRegistryTools", (error, registryItem) => {
        console.log("GetProtectionStatusQuery", {
          error,
          registryItem,
        });

        if (error) {
          return reject(error);
        }

        resolve(parseInt(registryItem.value));
      });
    });
  }

  private getMockedProtectionStatus(): number {
    return Math.round(Math.random());
  }

  private mapProtectionStatus(status: number): ProtectionStatus {
    const mapper: Record<number, ProtectionStatus> = {
      0: ProtectionStatus.Disabled,
      1: ProtectionStatus.Enabled,
    };

    const mappedStatus = mapper[status];

    if (!mappedStatus) {
      throw new Error("E_PROTECTION_STATUS_INVALID");
    }

    return mappedStatus;
  }
}
