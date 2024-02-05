import { Router } from "express";
import sqlite from "sqlite3";

const router = Router();
const sqlite3 = sqlite.verbose();
const db = new sqlite3.Database("db.sqlite");

router.get("/health", async (req, res) => {
  res.send("I'm alive");
});

router.get("/tolerance", async (req, res) => {
  db.all("select * from tolerance", (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.send(rows);
  });
});

router.get("/multiplier", async (req, res) => {
  db.all("select * from multiplier", (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.send(rows);
  });
});

export default router;
