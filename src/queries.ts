import { GetMacAddressQuery } from "./queries/get-mac-address.query";
import {
  GetProtectionStatusQuery,
  ProtectionStatus,
} from "./queries/get-protection-status.query";

export class Queries {
  private readonly getProtectionStatusQuery = new GetProtectionStatusQuery();
  private readonly getMacAddressQuery = new GetMacAddressQuery();

  public protectionStatus(): Promise<ProtectionStatus> {
    return this.getProtectionStatusQuery.execute();
  }

  public macAddress(): string {
    return this.getMacAddressQuery.execute()
  }
}
