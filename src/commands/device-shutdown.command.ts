import { shutdown } from "../common/node-shutdown-windows";

export class DeviceShutdownCommand {
  public async execute(): Promise<CommandResponse> {
    return new Promise<CommandResponse>((resolve) => {
      const shutdownProcess = shutdown(0, true);
      shutdownProcess.on("close", () => {
        resolve({
          error: null,
          stdout: "",
          stderr: "",
        });
      });
    });
  }
}
