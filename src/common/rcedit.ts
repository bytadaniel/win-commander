import rcedit from "rcedit";
import { config } from "./config";

(async () => {
  await rcedit(config.paths.pcCommander, {
    "version-string": {
      ProductName: "PcCommanderService"
    },
  });

  await rcedit(config.paths.pcCommander, {
    "version-string": {
      Comments: "PcCommanderService"
    },
  });

  await rcedit(config.paths.pcCommander, {
    "version-string": {
      FileDescription: "PcCommanderService"
    },
  });
})()
