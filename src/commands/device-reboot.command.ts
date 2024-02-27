import { reboot } from "../libs/node-shutdown-windows";

export class DeviceRebootCommand {
  public async execute(): Promise<void> {
    await new Promise<void>((resolve) => {
      const process = reboot(0, true);
      process.on("close", resolve);
    });
  }
}