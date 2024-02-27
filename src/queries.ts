import {
  GetProtectionStatusQuery,
  ProtectionStatus,
} from "./queries/get-protection-status.query";

export class Queries {
  private readonly getProtectionStatusQuery = new GetProtectionStatusQuery();

  public protectionStatus(): Promise<ProtectionStatus> {
    return this.getProtectionStatusQuery.execute();
  }
}
