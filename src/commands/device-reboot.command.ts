import { forceReboot } from '@napi-rs/system-shutdown'

export class DeviceRebootCommand {
  public async execute(): Promise<CommandResponse> {
    return new Promise<CommandResponse>((resolve) => {
      try {
        forceReboot()
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
