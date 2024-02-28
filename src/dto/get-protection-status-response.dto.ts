import { ProtectionStatus } from "../queries/get-protection-status.query";

export interface GetProtectionStatusResponseDTO {
  status: ProtectionStatus;
}
