import { reboot } from "../common/node-shutdown-windows";

export class DeviceRebootCommand {
  public async execute(): Promise<CommandResponse> {
    return new Promise<CommandResponse>((resolve) => {
      const process = reboot(0, true);
      process.on("close", () => {
        resolve({
          error: null,
          stdout: "",
          stderr: "",
        });
      });
    });
  }
}
