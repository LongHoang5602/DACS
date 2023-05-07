const router = require("express").Router()
const Post = require("../models/Post")
const User = require("../models/User")
const Comment = require("../models/Comment")


// comment post
router.post("/:id/comment", async (req, res) => {
    const newComment = new Comment(req.body)
    const post = await Post.findById(req.params.id)
    if (req.body.id === undefined) {
        try {
            const savedComment = await newComment.save()
            res.status(200).json(savedComment)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        try {
            const currentComment = await Comment.findById(req.body.id)
            await currentComment.comment.push(newComment.id)
            const savedCurrentComment = await currentComment.save()
            newComment.cmtId = req.body.id
            const savedComment = await newComment.save()
            res.status(200).json(savedComment)
        } catch (err) {
            res.status(500).json(err)
        }
    }

})
// update a cmt
router.put("/:id", async (req, res) => {

    try {
        const comment = await Comment.findById(req.params.id)
        if (comment.userId === req.body.userId) {
            await comment.updateOne({ $set: req.body })
            res.status(200).json("Comment have been update")
        } else {
            res.status(403).json("You can update only your comment")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
// delete a cmt
router.delete("/:id", async (req, res) => {
    const comment = await Comment.findById(req.params.id)

    if (comment.cmtId !== undefined) { // cmtId !== undefined là cmt con
        try {
            if (comment.userId === req.body.userId) {
                await comment.deleteOne()
                res.status(200).json("Comment have been deleted")
            } else {
                res.status(403).json("You can delete only your comment")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        if (comment.comment === null) {
            try {
                if (comment.userId === req.body.userId) {
                    await comment.deleteOne()
                    res.status(200).json("Comment have been deleted")
                } else {
                    res.status(403).json("You can delete only your comment")
                }
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            try {
                if (comment.userId === req.body.userId) {
                    let arrComment = comment.comment
                    for (let i = 0; i < arrComment.length; i++) {
                        let idCmt = await Comment.findById(arrComment[i])
                        await idCmt.deleteOne()
                    }
                    await comment.deleteOne()
                    res.status(200).json("Comment have been deleted")
                }
                else {
                    res.status(403).json("You can delete only your comment")
                }
            } catch (err) {
                res.status(500).json(err)
            }
        }


    }
})
// like and dislike a cmt
router.put("/:id/like", async (req, res) => {

    try {
        const comment = await Comment.findById(req.params.id)
        if (!comment.likes.includes(req.body.userId)) {
            await comment.updateOne({ $push: { likes: req.body.userId } })
            res.status(200).json("Comment have been liked")
        } else {
            await comment.updateOne({ $pull: { likes: req.body.userId } })
            res.status(200).json("Comment have been disliked")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// get cmt
router.get("/:id", async (req, res) => {

    try {
        const comment = await Comment.findById(req.params.id)
        res.status(200).json(comment)
    } catch (err) {
        return res.status(500).json(err)
    }
})
module.exports = router