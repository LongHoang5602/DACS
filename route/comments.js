const router = require("express").Router()
const commentController = require("../controller/commentController")
const midlewareController = require("../controller/midlewareController")

// comment post
router.post("/:id/comment", midlewareController.getUserIdFromToken, commentController.commentPost)
// update a cmt
router.put("/:id", midlewareController.getUserIdFromToken, commentController.updatePost)
// delete a cmt
router.delete("/:id", midlewareController.getUserIdFromToken, commentController.deleteComment)
// get all cmt in posts
router.get("/:id/timeline/all", commentController.getAllPostCmt)
// get cmt
router.get("/:id", commentController.getAComment)
// like and dislike a cmt
router.put("/:id/like", midlewareController.getUserIdFromToken, commentController.likeOrDislike)


module.exports = router