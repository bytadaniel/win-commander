import { ProtectionDisableCommand } from "../commands/protection-disable.command";
import { ProtectionEnableCommand } from "../commands/protection-enable.command";
import { DeviceRebootCommand } from "../commands/device-reboot.command";
import { DeviceShutdownCommand } from "../commands/device-shutdown.command";
import { AltTabEnableCommand } from "../commands/alt-tab-enable.command";
import { AltTabDisableCommand } from "../commands/alt-tab-disable.command";

export class Commands {
  private readonly deviceRebootCommand = new DeviceRebootCommand();
  private readonly deviceShutdownCommand = new DeviceShutdownCommand();
  private readonly protectionEnableCommand = new ProtectionEnableCommand();
  private readonly protectionDisableCommand = new ProtectionDisableCommand();
  private readonly altTabEnableCommand = new AltTabEnableCommand();
  private readonly altTabDisableCommand = new AltTabDisableCommand();

  public async deviceReboot(): Promise<void> {
    return this.deviceRebootCommand.execute();
  }

  public async deviceShutdown(): Promise<void> {
    return this.deviceShutdownCommand.execute();
  }

  public async protectionEnable(): Promise<any> {
    return this.protectionEnableCommand.execute();
  }

  public async protectionDisable(): Promise<void> {
    return this.protectionDisableCommand.execute();
  }

  public async altTabEnable(): Promise<void> {
    return this.altTabEnableCommand.execute();
  }

  public async altTabDisable(): Promise<void> {
    return this.altTabDisableCommand.execute();
  }
}
