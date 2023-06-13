const router = require("express").Router()
const postController = require("../controller/postController")
const midlewareController = require("../controller/midlewareController")

// create a post
router.post("/", midlewareController.getUserIdFromToken, postController.upload, postController.createPost)

// update a post
router.put("/:id", midlewareController.getUserIdFromToken, postController.upload, postController.updatePost)

// delete a post
router.delete("/:id", midlewareController.getUserIdFromToken, postController.deletePost)

// like and dislike a post
router.put("/:id/like", midlewareController.getUserIdFromToken, postController.likePost)

// get a post 
router.get("/:id", postController.getAPost)

// get all likes
router.get("/:id/alllikes", postController.getAllLikeinPost)

// get all user post and friend user post
router.get("/timeline/all", midlewareController.getUserIdFromToken, postController.getAllPostinThisUser)


module.exports = router