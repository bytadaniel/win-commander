import { shutdown } from "../common/node-shutdown-windows";

export class DeviceShutdownCommand {
  public async execute(): Promise<void> {
    await new Promise<void>((resolve) => {
      const process = shutdown(0, true);
      process.on("close", resolve);
    });
  }
}
