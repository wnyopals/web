const express = require("express");
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
// const db = require("../../db/models");
const Inquiry = require("../../db/models/Inquiry");
const Message = require("../../db/models/message");
const { Op, where } = require("sequelize");
const { validateAccessToken } = require("../../utils/auth");

router.get(
  "/",
  expressAsyncHandler(async (req, res, next) => {
    const inquiries = await Inquiry.findAll();
    res.json(inquiries);
  })
);

router.get(
  "/:id",
  expressAsyncHandler(async (req, res, next) => {
    const inquiry = await Inquiry.findByPk(parseInt(req.params.id));
    res.json(inquiry);
  })
);

router.post(
  "/",
  expressAsyncHandler(async (req, res, next) => {
    const { email, phoneNumber, subject, listingId, message } = req.body;

    try {
      const inquiry = await Inquiry.create({
        email,
        phoneNumber,
        subject,
        listingId,
      });

      if (!inquiry) throw new Error("Unable to create inquiry");

      const message = await Message.create({
        message,
        inquiryId: inquiry.id,
      });

      if (!message) throw new Error("Unable to add message to created inquiry");

      res.json(inquiry);
    } catch (e) {
      next(e);
    }
  })
);

router.put(
  "/:id",
  expressAsyncHandler(async (req, res, next) => {
    const { email, phoneNumber, subject, listingId } = req.body;

    try {
      const inquiry = await Inquiry.findByPk(parseInt(req.params.id));
      if (!inquiry) throw new Error("Cannot find inquiry to update");
      await inquiry.update({
        email,
        phoneNumber,
        subject,
        listingId,
      });
      const updatedInquiry = await Inquiry.findByPk(parseInt(req.params.id));
      res.json(updatedInquiry);
    } catch (e) {
      next(e);
    }
  })
);

router.delete(
  "/:id",
  expressAsyncHandler(async (req, res, next) => {
    try {
      const inquiry = await Inquiry.findByPk(parseInt(req.params.id));
      if (!inquiry) throw new Error("Cannot find inquiry to delete");
      await inquiry.destroy();
      res.json({ message: "inquiry deleted" });
    } catch (e) {
      next(e);
    }
  })
);

module.exports = router;
