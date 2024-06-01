const express = require("express");
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const db = require("../../db/models");
const {stripeApiKey} = require("../../config/index")
const Stripe = require("stripe")
const stripe = Stripe(stripeApiKey)

router.post("/", expressAsyncHandler(async (req, res, next) => {
    const {amount, currency} = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100, currency
    });
    res.json({
        client_secret: paymentIntent.client_secret,
    });
}))

router.put("/")

router.post("/update-intent", expressAsyncHandler(async (req, res, next) => {
    //This is just in case details on the payment change
    //Addresses, card details, name, etc
}))

router.post("/confirm-intent", expressAsyncHandler(async (req, res, next) => {

}))
module.exports = router;