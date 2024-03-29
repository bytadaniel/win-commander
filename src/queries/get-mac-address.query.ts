import getMac, { isMAC } from "getmac";

export class GetMacAddressQuery {
  public execute(): string {
    const macAddress = getMac().toUpperCase();

    if (!isMAC(macAddress)) {
      throw new Error("E_MAC_INVALID");
    }

    return macAddress;
  }
}
