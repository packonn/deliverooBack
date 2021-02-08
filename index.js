const express = require("express");
const cors = require("cors");
const data = require("./data.json");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT, () => {
  console.log("serveur started");
});
