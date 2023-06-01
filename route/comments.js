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
            return res.json("Error !")
        }
    } else {
        try {
            const currentComment = await Comment.findById(req.body.id)
            await currentComment.comment.push(newComment.id)
            const savedCurrentComment = await currentComment.save()
            newComment.cmtId = req.body.id
            const savedComment = await newComment.save()
            return res.status(200).json(savedComment)
        } catch (err) {
            return res.json("Error !")
        }
    }

})
// update a cmt
router.put("/:id", async (req, res) => {

    try {
        const comment = await Comment.findById(req.params.id)
        if (comment.userId === req.body.userId) {
            await comment.updateOne({ $set: req.body })
            return res.status(200).json("Comment have been update")
        } else {
            return res.status(403).json("You can update only your comment")
        }
    } catch (err) {
        return res.json("Error !")
    }
})
// delete a cmt
router.delete("/:id", async (req, res) => {
    const comment = await Comment.findById(req.params.id)

    if (comment.cmtId !== undefined) { // cmtId !== undefined là cmt con
        try {
            if (comment.userId === req.body.userId) {
                await comment.deleteOne()
                return res.status(200).json("Comment have been deleted")
            } else {
                return res.status(403).json("You can delete only your comment")
            }
        } catch (err) {
            return res.json("Error !")
        }
    } else {
        if (comment.comment === null) {
            try {
                if (comment.userId === req.body.userId) {
                    await comment.deleteOne()
                    return res.status(200).json("Comment have been deleted")
                } else {
                    return res.status(403).json("You can delete only your comment")
                }
            } catch (err) {
                return res.json("Error !")
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
                    return res.status(200).json("Comment have been deleted")
                }
                else {
                    return res.status(403).json("You can delete only your comment")
                }
            } catch (err) {
                return res.json("Error !")
            }
        }
    }
})
// get timelines posts
router.get("/:id/timeline/all", async (req, res) => {

    try {
        // const currentUser = await User.findById(req.body.userId)
        // const userPost = await User.find({ userId: currentUser._id })
        // const friendPost = await Promise.all(
        //     currentUser.followings.map((friendId) => {
        //         return Post.find({ userId: friendId })
        //     })
        // )
        // let postArray = []
        // const post = await Post.findById(req.params.id)
        // const comment = await Comment.find({ postId: post.id })
        // postArray.push(comment._id)
        // const parentCmt = await Promise.all(
        //     postArray.forEach(element => {
        //         if (element.cmtId === null) {
        //             comment._id.map((idCmt) => {
        //                 Comment.find({ _id: idCmt })
        //             })
        //         }
        //     })
        // )
        // const childCmt = await Promise.all(
        //     postArray.forEach(element => {
        //         if (element.cmtId !== null) {
        //             comment._id.map((idCmt) => {
        //                 Comment.find({ _id: idCmt })
        //             })
        //         }
        //     })
        // )
        // const Cmt = await Promise.all(
        //     parentCmt.forEach(parent => {
        //         Comment.findById(parent._id)
        //         childCmt.forEach(child => {
        //             Comment.find({ cmtId: parent._id })
        //         })
        //     })
        // )
        // res.json(Cmt)

        const postCmt = await Comment.find({ postId: req.params.id })
        //const post = posts.find(post => post.id === postId); // Tìm bài đăng có id tương ứng trong mảng posts

        if (postCmt.length === 0) {
            return res.status(404).json({ message: 'Bài đăng không tồn tại' }); // Trả về thông báo lỗi nếu không tìm thấy bài đăng
        }

        //const comments = post.; // Lấy tất cả các comment của bài đăng
        const allComments = []; // Tạo một mảng rỗng để chứa tất cả các comment, bao gồm cả các comment con

        // Duyệt qua tất cả các comment và các comment con của bài đăng
        for (let i = 0; i < postCmt.length; i++) {
            const commentParent = postCmt[i];
            allComments.push(commentParent); // Thêm comment vào mảng allComments

            // Duyệttiếp qua tất cả các reply của comment
            for (let j = 0; j < commentParent.comment.length; j++) {
                const reply = commentParent.comment[j];
                allComments.push(reply); // Thêm reply vào mảng allComments
            }
        }

        return res.status(200).json(allComments); // Trả về tất cả các comment của bài đăng, bao gồm cả các comment con
    } catch (err) {
        return res.json("Error !")
    }
})
// get cmt
router.get("/:id", async (req, res) => {

    try {
        const comment = await Comment.findById(req.params.id)
        return res.status(200).json(comment)
    } catch (err) {
        return res.json("Error !")
    }
})
// like and dislike a cmt
router.put("/:id/like", async (req, res) => {

    try {
        const comment = await Comment.findById(req.params.id)
        if (!comment.likes.includes(req.body.userId)) {
            await comment.updateOne({ $push: { likes: req.body.userId } })
            return res.status(200).json("Comment have been liked")
        } else {
            await comment.updateOne({ $pull: { likes: req.body.userId } })
            return res.status(200).json("Comment have been disliked")
        }
    } catch (err) {
        return res.json("Error !")
    }
})


module.exports = router