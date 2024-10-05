const express = require("express");
const { connectToDb, getDb } = require("./db");

// init app & middleware
const app = express();

let db;
connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("listening on Port 3000");
    });
  }
  db = getDb();
});

//routes
app.get("/users", (req, res) => {
  res.json({ msg: "welcome to the api" });
});
