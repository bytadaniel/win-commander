import path from "path";
import fs from "fs";
import express from "express";
import { Commands } from "./commands";
import { Queries } from "./queries";

const PORT = process.env.PORT || 5050;
const app = express();

const commands = new Commands();
const queries = new Queries();

app.use(express.json());

app.post("/device/shutdown", async (req, res) => {
  await commands
    .deviceShutdown()
    .then(() => res.sendStatus(200))
    .catch((e) => res.status(500).send(e));
});

app.post("/device/reboot", async (req, res) => {
  await commands
    .deviceReboot()
    .then(() => res.sendStatus(200))
    .catch((e) => res.status(500).send(e));
});

app.get("/device/mac-address", (req, res) => {
  try {
    res.status(200).json(queries.macAddress());
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/alt-tab/enable", async (req, res) => {
  await commands
    .altTabEnable()
    .then(() => res.sendStatus(200))
    .catch((e) => res.status(500).send(e));
});

app.post("/alt-tab/disable", async (req, res) => {
  await commands
    .altTabDisable()
    .then(() => res.sendStatus(200))
    .catch((e) => res.status(500).send(e));
});

app.post("/protection/enable", async (req, res) => {
  await commands
    .protectionEnable()
    .then(() => res.sendStatus(200))
    .catch((e) => res.status(500).send(e));
});

app.post("/protection/disable", async (req, res) => {
  await commands
    .protectionDisable()
    .then(() => res.sendStatus(200))
    .catch((e) => res.status(500).send(e));
});

app.get("/protection/status", async (req, res) => {
  await queries
    .protectionStatus()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.listen(PORT, () => console.log("Start server on port", PORT));

console.log(__dirname);
console.log(fs.readdirSync(__dirname));
console.log(fs.readdirSync(path.resolve(__dirname, "../")));
