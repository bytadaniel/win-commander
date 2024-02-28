import { GetMacAddressResponseDTO } from "./dto/get-mac-address-response.dto";
import { GetProtectionStatusResponseDTO } from "./dto/get-protection-status-response.dto";
import { GetMacAddressQuery } from "./queries/get-mac-address.query";
import {
  GetProtectionStatusQuery,
  ProtectionStatus,
} from "./queries/get-protection-status.query";

export class Queries {
  private readonly getProtectionStatusQuery = new GetProtectionStatusQuery();
  private readonly getMacAddressQuery = new GetMacAddressQuery();

  public async protectionStatus(): Promise<GetProtectionStatusResponseDTO> {
    const status = await this.getProtectionStatusQuery.execute();

    return {
      status,
    };
  }

  public macAddress(): GetMacAddressResponseDTO {
    const macAddress = this.getMacAddressQuery.execute();

    return {
      macAddress,
    };
  }
}
