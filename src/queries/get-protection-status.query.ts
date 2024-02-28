import os from "os";
import { promisify } from "util";
import Registry from "winreg";

export enum ProtectionStatus {
  Disabled = "DISABLED",
  Enabled = "ENABLED",
}

export class GetProtectionStatusQuery {
  private readonly winRegistry = new Registry({
    key: "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\System",
  });

  private readonly winRegistryCommands = {
    valueExists: promisify(this.winRegistry.valueExists),
    set: promisify(this.winRegistry.set),
    get: promisify(this.winRegistry.get),
    values: promisify(this.winRegistry.values),
  };

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
    const disableRegistryTools = "DisableRegistryTools";

    const exists = await new Promise<boolean>((resolve) => {
      this.winRegistry.get(disableRegistryTools, (error, item) => {
        resolve(error || !item?.value ? false : true);
      });
    });

    console.log({ exists });

    if (!exists) {
      await new Promise<void>((resolve, reject) => {
        this.winRegistry.set(
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

    const registryItem = await this.winRegistryCommands.get(
      disableRegistryTools
    );

    console.log({
      registryItem,
      value: registryItem.value,
      intValue: parseInt(registryItem.value),
    });

    return parseInt(registryItem.value);
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
