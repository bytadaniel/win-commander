import os from "os";
import { promisify } from "util";
import Registry from "winreg";

export enum ProtectionStatus {
  Disabled = "DISABLED",
  Enabled = "ENABLED",
}

export class GetProtectionStatusQuery {
  // private readonly winRegistryCommands = {
  //   valueExists: promisify(this.winRegistry.valueExists),
  //   set: promisify(this.winRegistry.set),
  //   get: promisify(this.winRegistry.get),
  //   values: promisify(this.winRegistry.values),
  // };

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

  private async getDeviceProtectionTools(): Promise<number> {
    const registry = new Registry({
      hive: Registry.HKCU,
      key: "\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System",
    });

    await new Promise<void>((resolve, reject) => {
      registry.values((err, items) => {
        console.log({ err, items: items?.map((i) => [i.name, i.key, i.value]) });

        if (err) return reject(err);
        resolve();
      });
    });

    const disableRegistryTools = "DisableRegistryTools";

    const exists = await new Promise<boolean>((resolve) => {
      registry.get(disableRegistryTools, (error, item) => {
        console.log({
          error,
          item,
          value: item?.value,
        });

        resolve(error || !item?.value ? false : true);
      });
    });

    console.log({ exists });

    if (!exists) {
      await new Promise<void>((resolve, reject) => {
        registry.set(
          disableRegistryTools,
          Registry.REG_DWORD,
          "0x0",
          (setWinErgValueError) => {
            if (setWinErgValueError) {
              console.log({ setWinErgValueError });
              return reject(setWinErgValueError);
            }

            resolve();
          }
        );
      });
    }

    return new Promise<number>((resolve, reject) => {
      registry.get(disableRegistryTools, (error, item) => {
        console.log({
          error,
          item,
          value: item.value,
          intValue: parseInt(item.value),
        });

        resolve(parseInt(item.value));
      });
    });
  }

  private async getProtectionStatusFromWinReg(): Promise<number> {
    return this.getDeviceProtectionTools();
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
