const express = require("express");
const router = express.Router();
const expressAsyncHandler = require("express-async-handler");
const db = require("../../db/models");
const { Op, where } = require("sequelize");
const { validateAccessToken } = require("../../utils/auth")

// Get user safe object
// expect the req to include an id for the user
router.get("/:id", expressAsyncHandler(async (req, res, next) => {
    const {id} = req.params;
    const user = await db.User.scope("currentUser").findByPk(id,
        {
            include: [
            {
                model: db.Inquerry
            },
            {
                model: db.Transaction,
                // include: [db.TransactionStatus, db.Listing]
                include: [
                    db.Listing
                ]
            }
        ]
    })
    console.log(id);
    if (!user) throw new Error("user doesn't exist")
    res.json(user);
}))

// Update user
//TODO: Need middleware to verify user
router.put("/:id", validateAccessToken, expressAsyncHandler(async (req, res, next) => {
    const {id} = req.params;
    const user = await db.User.scope("currentUser").findByPk(id)
}))


// Delete user
//TODO: Need middleware to verify user
router.delete("/:id", validateAccessToken, expressAsyncHandler(async (req, res, next) => {
    try{
        const user = req.user
        const userId = parseInt(req.params.id)

        console.log(user)
        
        if (!user) throw new Error("User not found")
        if (user.id === userId) {
            try{
                // const userToDestroy = await db.User.findOne({
                //     where: {
                //         id: userId
                //     }
                // })

                await db.User.destroy({
                    where: {
                        id: userId
                    }
                });
                res.json({
                    message: "User deleted successfully"
                })
            } catch (e) {
                next(e)
            }
        } else {
            throw new Error(`Token is valid but user doesn't match. ${userId} != ${user.id}`)
        }
    } catch (e) {
        next(e)
    }
}))

module.exports = router;