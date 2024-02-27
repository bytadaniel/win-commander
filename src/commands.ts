import { ProtectionDisableCommand } from "./commands/protection-disable.command";
import { ProtectionEnableCommand } from "./commands/protection-enable.command";
import { DeviceRebootCommand } from "./commands/device-reboot.command";
import { DeviceShutdownCommand } from "./commands/device-shutdown.command";

export class Commands {
  private readonly deviceRebootCommand = new DeviceRebootCommand();
  private readonly deviceShutdownCommand = new DeviceShutdownCommand();
  private readonly protectionEnableCommand = new ProtectionEnableCommand();
  private readonly protectionDisableCommand = new ProtectionDisableCommand();

  public async deviceReboot(): Promise<void> {
    return this.deviceRebootCommand.execute();
  }

  public async deviceShutdown(): Promise<void> {
    return this.deviceShutdownCommand.execute();
  }

  public async protectionEnable(): Promise<void> {
    return this.protectionEnableCommand.execute();
  }

  public async protectionDisable(): Promise<void> {
    return this.protectionDisableCommand.execute();
  }
}
