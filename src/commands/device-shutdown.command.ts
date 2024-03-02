import { forceShutdown } from "@napi-rs/system-shutdown";

export class DeviceShutdownCommand {
  public async execute(): Promise<CommandResponse> {
    return new Promise<CommandResponse>((resolve) => {
      try {
        forceShutdown()
        resolve({
          error: null,
          stdout: "",
          stderr: "",
        });
      } catch (error) {
        resolve({
          error: error as Error,
          stdout: "",
          stderr: "",
        });
      }
    })
  }
}
