const router = require("express").Router()
const Post = require("../models/Post")
const User = require("../models/User")
const Comment = require("../models/Comment")

router.get("/", (req, res) => {
    res.send("Post route")
})

// create a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        return res.status(200).json(savedPost)
    } catch (err) {
        return res.json("Error !")
    }
})
// update a post
router.put("/:id", async (req, res) => {

    try {
        const post = await Post.findById(req.params.id)
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body })
            return res.status(200).json("Post have been update")
        } else {
            return res.status(403).json("You can update only your post")
        }
    } catch (err) {
        return res.json("Error !")
    }
})
// delete a post
router.delete("/:id", async (req, res) => {

    try {
        const post = await Post.findById(req.params.id)
        if (post.userId === req.body.userId) {
            await post.deleteOne()
            return res.status(200).json("Post have been deleted")
        } else {
            return res.status(403).json("You can delete only your post")
        }
    } catch (err) {
        return res.json("Error !")
    }
})
// like and dislike a post
router.put("/:id/like", async (req, res) => {

    try {
        const post = await Post.findById(req.params.id)
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } })
            return res.status(200).json("Post have been liked")
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } })
            return res.status(200).json("Post have been disliked")
        }
    } catch (err) {
        return res.json("Error !")
    }
})

// get a post 
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        return res.status(200).json(post)
    } catch (err) {
        return res.json("Error !")
    }
})
// get all likes
router.get("/all/likes", async (req, res) => {
    try {
        const post = await Post.findById(req.body.id)
        let arrLikes = post.likes
        let userLikes = []
        for (let i = 0; i < arrLikes.length; i++) {

            let user = await User.findById(arrLikes[i])
            let userNameLike = user.username
            userLikes.push(userNameLike)
        }
        return res.status(200).json(userLikes)
    } catch (err) {
        return res.json("Error !")
    }
})

// get timelines posts
router.get("/timeline/all", async (req, res) => {
    let postArray = []
    try {
        const currentUser = await User.findById(req.body.userId)
        const userPost = await User.find({ userId: currentUser._id })
        const friendPost = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId })
            })
        )
        return res.json(userPost.concat(...friendPost))
    } catch (err) {
        return res.json("Error !")
    }
})


module.exports = router