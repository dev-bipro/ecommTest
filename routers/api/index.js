const express = require("express");
const _ = express.Router();
const authRoute = require("./auth")

_.use("/auth",authRoute)

module.exports = _;
