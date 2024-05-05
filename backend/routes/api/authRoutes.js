const express = require("express");
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const db = require("../../db/models");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const {
  setTokens,
  validateAccessToken,
  validateRefreshToken,
  generateAccessToken,
} = require("../../utils/auth");

//used to authenticate the user
router.post(
  "/",
  expressAsyncHandler(async (req, res, next) => {
    //Destructure response
    const { credential, password } = req.body;
    console.log("Credential", credential);
    //find user
    const user = await db.User.scope("loginUser").findOne({
      where: {
        email: credential,
      },
    });
    //if the user is found, make sure the password is right
    console.log(user.password)
    if (user && bcrypt.compareSync(password, user.password)) {
      // send back the refresh and response tokens
      console.log(user)
      setTokens(res, user);
    } else {
      const err = new Error("Login failed");
      err.title = "Login Failed";
      err.errors = ["the provided credentials were invalid"];
      return next(err);
    }
  })
);

//used to refresh the user session when the auth token expires
router.post(
  "/refresh",
  expressAsyncHandler(async (req, res, next) => {})
);

//used to create a new user
router.post(
  "/signup",
  expressAsyncHandler(async (req, res, next) => {
    const {
      firstName,
      lastName,
      email,
      password,
      addressLineOne,
      addressLineTwo,
      addressCity,
      addressStateProvince,
      addressPostalCode,
    } = req.body;
    //attempt to create a new user
    try{
        const myHashedPassword = bcrypt.hashSync(password);
        const newUser = await db.User.findOrCreate({
            where: {
                email
            },
            defaults: {
                firstName,
                lastName,
                email,
                password: myHashedPassword,
                addressLineOne,
                addressLineTwo,
                addressCity,
                addressStateProvince,
                addressPostalCode,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        });
        const updatedNewUser = await db.User.findByPk(newUser.id);
        res.json(updatedNewUser)
    } catch (e) {
        next(e)
    }
  })
);

module.exports = router;
