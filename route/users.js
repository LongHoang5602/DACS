const router = require("express").Router()
const userController = require("../controller/userController")
const midlewareController = require("../controller/midlewareController")


// update user
router.put("/:id", midlewareController.getUserIdFromToken, userController.updateUser)

// update coverimg
router.put("/:id/coverimg", midlewareController.getUserIdFromToken, userController.uploadCoverImg, userController.updateCoverImgUser)

// update profileimg
router.put("/:id/profileimg", midlewareController.getUserIdFromToken, userController.uploadProfileImg, userController.updateProfileImgUser)

// delete user
router.delete("/:id", midlewareController.getUserIdFromToken, userController.deleteUser)

// get a user
router.get("/:id", userController.getAUser)

// router.get("/find", userController.findAUser)
router.get('/find/:username', userController.findAUser)

// follow a user
router.put("/:id/follow", midlewareController.getUserIdFromToken, userController.followUser)



module.exports = router