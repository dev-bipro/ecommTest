const express = require("express");
const { createIdControllers } = require("../../../controllers/userControllers");
const userHead = require("../../../middileware/user/userHeadCheck");
const _ = express.Router();

_.post("/create", userHead, createIdControllers);

module.exports = _;
