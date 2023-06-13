const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")
const userController = require("../controller/userController")
const midlewareController = require("../controller/midlewareController")
const {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndUserAuthorization,
} = require("../controller/verifyTokenController");

// update user
router.put("/:id", midlewareController.getUserIdFromToken, userController.updateUser)

router.put("/:id/coverimg", midlewareController.getUserIdFromToken, userController.uploadCoverImg, userController.updateCoverImgUser)

router.put("/:id/profileimg", midlewareController.getUserIdFromToken, userController.uploadProfileImg, userController.updateProfileImgUser)

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