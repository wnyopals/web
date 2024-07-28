const express = require("express");
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const db = require("../../db/models");
const {stripeApiKey} = require("../../config/index")
const Stripe = require("stripe")
const stripe = Stripe(stripeApiKey)

const YOUR_DOMAIN = "http://localhost:5173/payments";

const endpointSecret = process.env.PRODUCTION ? "" : process.env.STRIPE_ENDPOINT_SECRET;


router.post('/create-checkout-session', async (req, res) => {
    const cart = req.body;
    console.log(cart)
    const lineItems = cart.map(item => ({
        price_data: {
            currency: "USD",
            product_data: {
                name: item.title
            },
            unit_amount: item.price*100
        },
        quantity: 1
    }))

    const session = await stripe.checkout.sessions.create({
      customer_email: 'customer@example.com',
      submit_type: 'pay',
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      line_items: lineItems,
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
      automatic_tax: {enabled: false},
    });
  
    res.json(session)
  });
  


module.exports = router;