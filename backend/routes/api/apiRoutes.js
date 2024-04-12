const router = require('express').Router();

const listingRoutes = require("./listing");
const attributesRoutes = require("./listingAttributeRoutes")

router.use("/listing", listingRoutes)
router.use("/attributes", attributesRoutes)

router.get("/", (req, res) => {
    console.log("Welcome to the WNYOpals api!")
    res.send("Welcome to the WNYOpals api!")
})

module.exports = router;