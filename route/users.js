const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")
const userController = require("../controller/userController")
const {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndUserAuthorization,
} = require("../controller/verifyTokenController");

// update user
router.put("/:id", verifyTokenAndUserAuthorization, userController.updateUser)

// delete user
router.delete("/:id", verifyTokenAndUserAuthorization, userController.deleteUser)

// get a user
router.get("/:id", userController.getAUser)

// router.get("/find", userController.findAUser)
router.get('/find/:username', userController.findAUser)

// follow a user
router.put("/:id/follow", userController.followUser)

// unfollow a user
router.put("/:id/unfollow", userController.unfollowUser)

module.exports = router