import path from 'path'
import { Service } from "node-windows";

const svc = new Service({
  name: "pccommaner",
  description: "Executable for commands",
  script: path.resolve(__dirname, './express.js')
});

svc.on("install", function () {
  svc.start();
});

svc.install();
