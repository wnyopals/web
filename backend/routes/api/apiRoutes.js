const router = require('express').Router();

const listingRoutes = require("./listing");
const attributesRoutes = require("./listingAttributeRoutes")
const authRoutes  = require("./authRoutes")

router.use("/listing", listingRoutes)
router.use("/attributes", attributesRoutes)
router.use("/auth", authRoutes)

router.get("/", (req, res) => {
    console.log("Welcome to the WNYOpals api!")
    res.send("Welcome to the WNYOpals api!")
})

module.exports = router;