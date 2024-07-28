const express = require("express");
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const db = require("../../db/models");
const {stripeApiKey} = require("../../config/index")
const Stripe = require("stripe")
const stripe = Stripe(stripeApiKey)

router.post("/", express.raw("application/json"), expressAsyncHandler((request, response, next) => {
    console.log("endpoint hit")

    const sig = request.headers['stripe-signature'];

    let event;
  
    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      console.log("Event", event)
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  
    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const checkoutSessionCompleted = event.data.object;
        // Then define and call a function to handle the event checkout.session.completed
        console.log("Checkout Session", checkoutSessionCompleted)
        break;
      case 'refund.created':
        const refundCreated = event.data.object;
        // Then define and call a function to handle the event refund.created
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  
    // Return a 200 response to acknowledge receipt of the event
    response.send();
}))

module.exports = router;