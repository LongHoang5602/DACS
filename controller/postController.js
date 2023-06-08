const Post = require("../models/Post")
const User = require("../models/User")
const Comment = require("../models/Comment")

const postController = {
    createPost: async (req, res) => {
        const newPost = new Post({
            userId: req.userId,
            decs: req.body.decs,
            img: req.body.img
        })
        try {
            const savedPost = await newPost.save()
            return res.status(200).json(savedPost)
        } catch (err) {
            return res.status(500).json("Error !")
        }
    },
    getAPost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id)
            return res.status(200).json(post)
        } catch (err) {
            return res.status(500).json("Error !")
        }
    },
    updatePost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id)
            if (post.userId === req.userId) {
                await post.updateOne({ $set: req.body })
                return res.status(200).json("Post have been update")
            } else {
                return res.status(403).json("You can update only your post")
            }
        } catch (err) {
            return res.status(500).json("Error !")
        }
    },
    deletePost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id)
            if (post.userId === req.userId) {
                await post.deleteOne()
                return res.status(200).json("Post have been deleted")
            } else {
                return res.status(403).json("You can delete only your post")
            }
        } catch (err) {
            return res.status(500).json("Error !")
        }
    },
    likePost: async (req, res) => {

        try {
            const post = await Post.findById(req.params.id)
            if (!post.likes.includes(req.userId)) {
                await post.updateOne({ $push: { likes: req.userId } })
                return res.status(200).json("Post have been liked")
            } else {
                await post.updateOne({ $pull: { likes: req.body.userId } })
                return res.status(200).json("Post have been disliked")
            }
        } catch (err) {
            return res.status(500).json("Error !")
        }
    },
    getAllLikeinPost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id)
            let arrLikes = post.likes
            let userLikes = []
            for (let i = 0; i < arrLikes.length; i++) {

                let user = await User.findById(arrLikes[i])
                let userNameLike = user.username
                userLikes.push(userNameLike)
            }
            return res.status(200).json(userLikes)
        } catch (err) {
            return res.status(500).json("Error !")
        }
    },
    getAllPostinThisUser: async (req, res) => {
        let postArray = []
        try {
            const currentUser = await User.findById(req.userId)
            const userPost = await User.find({ userId: currentUser._id })
            const friendPost = await Promise.all(
                currentUser.followings.map((friendId) => {
                    return Post.find({ userId: friendId })
                })
            )
            return res.json(userPost.concat(...friendPost))
        } catch (err) {
            return res.status(500).json("Error !")
        }
    }

}
module.exports = postController