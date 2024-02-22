import { RebootCommand } from "./commands/reboot.command";
import { ShutdownCommand } from "./commands/shutdown.command";
import { Device } from "./interface";

export class Commander {
  private readonly rebootCommand = new RebootCommand();
  private readonly shutdownCommand = new ShutdownCommand();

  public async reboot(): Promise<void> {
    await this.rebootCommand.execute();
  }

  public async shutdown(): Promise<void> {
    await this.shutdownCommand.execute();
  }
}
