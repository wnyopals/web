const router = require('express').Router();

const listingRoutes = require("./listing")

router.use("/listing", listingRoutes)

router.get("/", (req, res) => {
    console.log("Welcome to the WNYOpals api!")
    res.send("Welcome to the WNYOpals api!")
})

module.exports = router;