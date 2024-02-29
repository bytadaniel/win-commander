import { Service } from "node-windows";

const svc = new Service({
  name: "PC-COMMANDER",
  description: "Executable for commands",
  script: "C:\\snapshot\\win-commander\\build\\express.js",
});

svc.start();
