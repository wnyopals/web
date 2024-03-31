const express = require("express")
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const db = require("../../db/models")
const {Op} = require("sequelize");


router.get("/", expressAsyncHandler(async (req, res, next) => {
    const {
        name
    } = req.query;

    console.log(name)

    try {
        if (name) {
            const allListings = await db.Listing.findAll({
                name
            });
            res.json(allListings);
        } else {
            const allListings = await db.Listing.findAll();
            res.json(allListings);
        }
    } catch (e) {
        next(e)
    }
}));

router.post("/", expressAsyncHandler(async (req, res, next) => {
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
        quantity
    } = req.body;

    const noValueErrors = [];
    const invalidValueErrors = [];
    const warnings = [];

    const render = [];

    if (!title) noValueErrors.push("Title");
    if (!price) noValueErrors.push("Price")
    if (!type) noValueErrors.push("Type")
    if (!weight) noValueErrors.push("Weight")
    if (!length) noValueErrors.push("Length")
    if (!width) noValueErrors.push("Width")
    if (!height) noValueErrors.push("Height")
    if (!quantity) noValueErrors.push("Quantity")

    if (noValueErrors.length > 0) {
        const message = noValueErrors.reduce((prev, cur) => prev + ", " + cur)
        const err = "No values were provided for the following:\n" + message
        throw new Error(err);
    }

    if (invalidValueErrors.length > 0) {
        const message = invalidValueErrors.reduce((prev, cur) => prev + ", " + cur)
        const err = "Invalid values were provided for the following:\n " + message;
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
        quantity
    })

    res.json(newListing);
}))

router.put("/:id", expressAsyncHandler(async (req, res, next) => {
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
        quantity
    } = req.body;
    throw new Error("API Endpoint not completed yet. Please use the patch endpoint!!")
}))

router.patch("/:id", expressAsyncHandler(async (req, res, next) => {
    const updatedListingValues = req.body;
    try {
        const listing = await db.Listing.findByPk(parseInt(req.params.id));
        if (!listing) throw new Error(`Listing with id ${id} not found. Try another id?`)
        listing.update(updatedListingValues);
        res.json(listing);
    } catch (e) {
        next(e)
    }
}))

router.delete("/:id", expressAsyncHandler(async (req, res, next) => {
    console.log(req.params)
    try {
        const listing = await db.Listing.findByPk(parseInt(req.params.id));
        if (!listing) throw new Error(`Listing with id ${id} not found. Try another id?`)
        await listing.destroy()
        res.json({message: `Listing with the id ${id} was deleted`})
    } catch (e) { 
        next(e)
    }
}))
module.exports = router;