require("dotenv").config();
const cors = require("cors");
const db = require("./database/db");
const { COUNTRIES } = require("./database/tableNames");
const cache = require("./cache");

const express = require("express");
const app = express();

const port = process.env.SERVER_PORT || 4000;
app.use(
  cors({
    exposedHeaders: ["Content-Disposition"],
  })
); // cors allow for all routes
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

app.get("/status", (req, res) => {
  return res.json({ status: "UP" });
});

app.post("/countries", async (req, res) => {
  try {
    const { name, about } = req.body;
    await db(COUNTRIES).insert({ name, about });

    res.json({ status: "ok" });
  } catch (err) {
    console.log("err: ", err);
    res.status(400).json({ message: "Something went wrong" });
  }
});

app.get("/countries", async (req, res) => {
  try {
    const dbRes = await db(COUNTRIES).select("name");
    res.json(dbRes.map((c) => c.name));
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

app.get("/countries/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const value = await cache.get(name);

    if (value) {
      return res.json({ name, about: value, cache: true });
    }

    const dbRes = await db(COUNTRIES).where({ name }).first();
    res.json(dbRes);

    await cache.set(name, dbRes.about);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log("demo server listening on port: ", port);
});
