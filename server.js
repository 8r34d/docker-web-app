const express = require("express");

const PORT = 8080;
const HOST = "0.0.0.0";
const NAME = "8r34d";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello ${NAME}\n`);
});

app.listen(PORT, HOST);

console.log(`Running on ${HOST} : ${PORT}`);
