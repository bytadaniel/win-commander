import express from "express";
import { Commander } from "./commander";

const app = express();
const commander = new Commander();

app.use(express.json());

app.post("/shutdown", async (req, res) => {
  await commander
    .shutdown()
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500));
});

app.post("/reboot", async (req, res) => {
  await commander
    .reboot()
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500));
});

app.listen(8083);
