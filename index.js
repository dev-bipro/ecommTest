require("dotenv").config();
require("./db/dbConfig");
const cors = require("cors");
const express = require("express");
const app = express();
const routePath = require("./routers");

app.use(express.json());
app.use(cors());

app.use("/", routePath);

app.listen(8000, () => {
  console.log("ami port");
});
