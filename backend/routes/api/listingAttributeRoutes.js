const express = require("express");
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const db = require("../../db/models");
const { Op } = require("sequelize");


router.get("/brightnesses", expressAsyncHandler(async (req, res, next) => {
    const brightnesses = await db.Brightness.findAll();
    if (!brightnesses) throw new Error("Could not get brightnesses")
    res.json(brightnesses)
}));

router.get("/cuts", expressAsyncHandler(async (req, res, next) => {
    const Cuts = await db.Cut.findAll();
    if (!Cuts) throw new Error("Could not get Cuts")
    res.json(Cuts)
}));

router.get("/listingstatuses", expressAsyncHandler(async (req, res, next) => {
    const ListingStatuses = await db.ListingStatus.findAll();
    if (!ListingStatuses) throw new Error("Could not get ListingStatuses")
    res.json(ListingStatuses)
}));

router.get("/opaltypes", expressAsyncHandler(async (req, res, next) => {
    const OpalTypes = await db.OpalType.findAll();
    if (!OpalTypes) throw new Error("Could not get OpalTypes")
    res.json(OpalTypes)
}));

router.get("/bodytones", expressAsyncHandler(async (req, res, next) => {
    const BodyTones = await db.BodyTone.findAll();
    if (!BodyTones) throw new Error("Could not get BodyTones")
    res.json(BodyTones)
}));

router.get("/domes", expressAsyncHandler(async (req, res, next) => {
    const Domes = await db.Dome.findAll();
    if (!Domes) throw new Error("Could not get Domes")
    res.json(Domes)
}));

router.get("/origins", expressAsyncHandler(async (req, res, next) => {
    const origins = await db.Origin.findAll();
    if (!origins) throw new Error("Could not get origins")
    res.json(origins)
}));

router.get("/patterns", expressAsyncHandler(async (req, res, next) => {
    const Pattern = await db.Pattern.findAll();
    if (!Pattern) throw new Error("Could not get Pattern")
    res.json(Pattern)
}));

router.get("/colors", expressAsyncHandler(async (req, res, next) => {
    const Color = await db.Color.findAll();
    if (!Color) throw new Error("Could not get Color")
    res.json(Color)
}));

module.exports = router;