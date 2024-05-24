const router = require('express').Router();

const listingRoutes = require("./listing");
const attributesRoutes = require("./listingAttributeRoutes")
const authRoutes  = require("./authRoutes")
const userRoutes = require("./userRoutes")
const inquiryRoutes = require("./inquiryRoutes");
const messageRoutes = require("./messageRoutes");

router.use("/listing", listingRoutes)
router.use("/attributes", attributesRoutes)
router.use("/auth", authRoutes)
router.use("/users", userRoutes)
router.use("/inquiries", inquiryRoutes);
router.use("/messages", messageRoutes)

router.get("/", (req, res) => {
    console.log("Welcome to the WNYOpals api!")
    res.send("Welcome to the WNYOpals api!")
})

module.exports = router;