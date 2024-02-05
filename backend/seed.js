import sqlite from 'sqlite3'

var sqlite3 = sqlite.verbose();

let db = new sqlite3.Database("db.sqlite", (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE tolerance (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            color text
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert = "INSERT INTO tolerance (color) VALUES (?)";
          db.run(insert, ["black"]);
          db.run(insert, ["brown"]);
          db.run(insert, ["red"]);
        }
      }
    );
    db.run(
        `CREATE TABLE multiplier (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              color text
              )`,
        (err) => {
          if (err) {
            // Table already created
          } else {
            // Table just created, creating some rows
            var insert = "INSERT INTO multiplier (color) VALUES (?)";
            db.run(insert, ["orange"]);
            db.run(insert, ["yellow"]);
            db.run(insert, ["green"]);
          }
        }
      );
  }
});

db.close();
