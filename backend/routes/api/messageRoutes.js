const express = require("express");
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
// const db = require("../../db/models");
const Inquiry = require("../../db/models/Inquiry");
const Message = require("../../db/models/message");
const { Op, where } = require("sequelize");
const { validateAccessToken } = require("../../utils/auth");

router.post("")

module.exports = router;