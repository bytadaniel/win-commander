import { shutdown } from "../common/node-shutdown-windows";

export class DeviceShutdownCommand {
  public async execute(): Promise<CommandResponse> {
    return new Promise<CommandResponse>((resolve) => {
      const process = shutdown(0, true);
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
