const express = require("express");
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const db = require("../../db/models");
const { Op, where } = require("sequelize");
const { validateAccessToken } = require("../../utils/auth");
const {listingQueryArgs} = require("../../utils/quryArgs")

router.get(
  "/",
  expressAsyncHandler(async (req, res, next) => {
    const inquiries = await db.Inquiry.findAll({
      include: [
        { model: db.Listing, ...listingQueryArgs },
        { model: db.Message, attributes: ["id", "message", "userId"] },
      ],
      order: [["createdAt", "DESC"]]
    });
    res.json(inquiries);
  })
);

router.get(
  "/:id",
  expressAsyncHandler(async (req, res, next) => {
    const inquiry = await db.Inquiry.findByPk(parseInt(req.params.id), {
      include: [
        {
          model: db.Listing,
          ...listingQueryArgs
        },
        { model: db.Message, attributes: ["id", "message", "userId"] },
      ],
    });
    res.json(inquiry);
  })
);

router.post(
  "/",
  expressAsyncHandler(async (req, res, next) => {
    const { email, phoneNumber, subject, listingId, message } = req.body;

    try {
      const inquiry = await db.Inquiry.create({
        email,
        phoneNumber,
        subject,
        listingId,
      });

      if (!inquiry) throw new Error("Unable to create inquiry");

      const newMessage = await db.Message.create({
        message,
        inquiryId: inquiry.id,
      });

      if (!newMessage)
        throw new Error("Unable to add message to created inquiry");

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
      const inquiry = await db.Inquiry.findByPk(parseInt(req.params.id));
      if (!inquiry) throw new Error("Cannot find inquiry to update");
      await inquiry.update({
        email,
        phoneNumber,
        subject,
        listingId,
      });
      const updatedInquiry = await db.Inquiry.findByPk(parseInt(req.params.id));
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
      const inquiry = await db.Inquiry.findByPk(parseInt(req.params.id));
      if (!inquiry) throw new Error("Cannot find inquiry to delete");
      await inquiry.destroy();
      res.json({ message: "inquiry deleted" });
    } catch (e) {
      next(e);
    }
  })
);

module.exports = router;
