import rcedit from "rcedit";
import { config } from "./config";

rcedit(config.paths.pcCommander, {
  "version-string": {
    ProductName: "PcCommanderService",
    OriginalFilename: "pc-commander.exe",
    CompanyName: "Tehopolis",
    Comments: "PcCommanderService by Tehnopolis",
  },
});
