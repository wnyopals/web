const express = require("express");
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const db = require("../../db/models");
const { Op } = require("sequelize");
const {listingQueryArgs} = require("../../utils/quryArgs")


router.get(
  "/",
  expressAsyncHandler(async (req, res, next) => {
    const { title } = req.query;

    try {
      if (title) {
        const allListings = await db.Listing.findAll({
          where: {
            title: {
              [Op.like]: `%${title}%`,
            },
          },
          ...listingQueryArgs,
        });
        if (!allListings) throw new Error("Listing not found");
        res.json(allListings);
      } else {
        const allListings = await db.Listing.findAll();
        res.json(allListings);
      }
    } catch (e) {
      next(e);
    }
  })
);

router.get(
  "/:id",
  expressAsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    try {
      if (id) {
        const listing = await db.Listing.findByPk(id, {
          ...listingQueryArgs,
        });
        if (!listing) throw new Error("Listing not found");
        res.json(listing);
      }
    } catch (e) {
      next(e);
    }
  })
);

router.post(
  "/",
  expressAsyncHandler(async (req, res, next) => {
    const {
      bypassWarnings,
      title,
      description,
      price,
      type,
      weight,
      length,
      width,
      height,
      bodyTone,
      brightness,
      cut,
      dome,
      origin,
      quantity,
      colors,
      patterns,
    } = req.body;

    const noValueErrors = [];
    const invalidValueErrors = [];
    const warnings = [];

    const render = [];

    if (!title) noValueErrors.push("Title");
    if (!price) noValueErrors.push("Price");
    if (!type) noValueErrors.push("Type");
    if (!weight) noValueErrors.push("Weight");
    if (!length) noValueErrors.push("Length");
    if (!width) noValueErrors.push("Width");
    if (!height) noValueErrors.push("Height");
    if (!quantity) noValueErrors.push("Quantity");

    if (noValueErrors.length > 0) {
      const message = noValueErrors.reduce((prev, cur) => prev + ", " + cur);
      const err = "No values were provided for the following:\n" + message;
      throw new Error(err);
    }

    if (invalidValueErrors.length > 0) {
      const message = invalidValueErrors.reduce(
        (prev, cur) => prev + ", " + cur
      );
      const err =
        "Invalid values were provided for the following:\n " + message;
      throw new Error(err);
    }

    //figure out warnings later

    //assuming that no errors were thrown and that the warnings were bypassed,
    //a listing will be created with the given values
    const newListing = await db.Listing.create({
      bypassWarnings,
      title,
      description,
      price,
      type,
      weight,
      length,
      width,
      height,
      bodyTone,
      brightness,
      cut,
      dome,
      origin,
      quantity,
    });

    await newListing.setColors(colors);
    await newListing.setPatterns(patterns);

    const createdListing = await db.Listing.findByPk(newListing?.id, listingQueryArgs);

    res.json(createdListing);
  })
);

router.put(
  "/:id",
  expressAsyncHandler(async (req, res, next) => {
    const {
      bypassWarnings,
      title,
      description,
      price,
      type,
      weight,
      length,
      width,
      height,
      bodyTone,
      brightness,
      cut,
      dome,
      origin,
      quantity,
      colors,
      patterns
    } = req.body;
    console.log()
      try {
        const listing = await db.Listing.findByPk(parseInt(req.params.id), listingQueryArgs)
        //operations for figuring out what colors to add/remove
        const colorsToRemove = listing.Colors.filter(color => !colors.includes(color.id)).map(colorObj => colorObj.id)
        const colorsToAdd = colors.filter(colorId => !listing.Colors.some(color => color.id === colorId))
        //operations for figuring out what patterns to add/remove (similar concept to above)
        const patternsToRemove = listing.Patterns.filter(pattern => !patterns.includes(pattern.id)).map(patternObj => patternObj.id)
        const patternsToAdd = patterns.filter(patternId => !listing.Patterns.some(pattern => pattern.id === patternId));
        // attempt to add the patterns and colors. if they don't exist an error should be thrown
        await listing.removeColors(colorsToRemove);
        await listing.removePatterns(patternsToRemove);
        await listing.addColors(colorsToAdd);
        await listing.addPatterns(patternsToAdd);
        await listing.update({
          title,
          description,
          price,
          type,
          weight,
          length,
          width,
          height,
          bodyTone,
          brightness,
          cut,
          dome,
          origin,
          quantity,
        })
        const updatedListing = await db.Listing.findByPk(parseInt(req.params.id), listingQueryArgs);
        res.json(updatedListing)
      } catch( e ) {
        next(e)
      }
  })
);

router.patch(
  "/:id",
  expressAsyncHandler(async (req, res, next) => {
    const updatedListingValues = req.body;
    try {
      const listing = await db.Listing.findByPk(parseInt(req.params.id));
      if (!listing)
        throw new Error(`Listing with id ${id} not found. Try another id?`);
      listing.update(updatedListingValues);
      res.json(listing);
    } catch (e) {
      next(e);
    }
  })
);

router.delete(
  "/:id",
  expressAsyncHandler(async (req, res, next) => {
    console.log(req.params);
    try {
      const listing = await db.Listing.findByPk(parseInt(req.params.id), listingQueryArgs);
      const colors = listing.Colors.map(color => color.id);
      const patterns = listing.Patterns.map(pattern => pattern.id);
      if (!listing)
        throw new Error(`Listing with id ${id} not found. Try another id?`);
      await listing.removeColors(colors);
      await listing.removePatterns(patterns);
      await listing.destroy();
      console.log(listing)
      res.json({ message: `Listing with the id ${req.params.id} was deleted` });
    } catch (e) {
      next(e);
    }
  })
);
module.exports = router;
