import rcedit from "rcedit";
import { config } from "./config";

(async () => {
  await rcedit(config.paths.pcCommander, {
    "version-string": {
      ProductName: "PcCommanderService"
    },
  });
})()
