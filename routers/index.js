const express = require("express");
const _ = express.Router();
const apiRoute = require("./api");
console.log(process.env.BASE_URL);

_.use(process.env.BASE_URL, apiRoute);
_.use("/", () => console.log("no"));

module.exports = _;
