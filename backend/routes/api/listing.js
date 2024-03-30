const express = require("express")
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const db = require("../../db/models")
const {Op} = require("sequelize");


router.get("/", expressAsyncHandler(async (req, res, next) => {
    // const {
    //     name
    // } = req.query;

    // console.log(name)

    // try {
    //     const allListings = await db.Listing.findAll({
    //         name
    //     })
    //     res.json(allListings);
    // } catch (e) {
    //     next(e)
    // }

    console.log("hello there!!")
}))

module.exports = router;