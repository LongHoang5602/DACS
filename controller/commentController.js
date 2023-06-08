const Post = require("../models/Post")
const User = require("../models/User")
const Comment = require("../models/Comment")

const commentController = {
    commentPost: async (req, res) => {
        const newComment = new Comment({
            decs: req.body.decs,
            img: req.body.img,
            postId: req.params.id,
            userId: req.userId,
            cmtId: req.body.cmtId
        })
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
                const parentComment = await Comment.findById(req.body.id)
                await parentComment.comment.push(newComment.id)
                await parentComment.save()
                newComment.cmtId = req.body.id
                const savedComment = await newComment.save()
                return res.status(200).json(savedComment)
            } catch (err) {
                return res.json("Error !")
            }
        }

    },
    updatePost: async (req, res) => {

        try {
            const comment = await Comment.findById(req.params.id)
            if (comment.userId === req.userId) {
                await comment.updateOne({ $set: req.body })
                return res.status(200).json("Comment have been update")
            } else {
                return res.status(403).json("You can update only your comment")
            }
        } catch (err) {
            return res.json("Error !")
        }
    },
    deleteComment: async (req, res) => {
        const comment = await Comment.findById(req.params.id)

        if (comment.cmtId !== undefined) { // cmtId !== undefined là cmt con
            try {
                if (comment.userId === req.userId) {
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
                    if (comment.userId === req.userId) {
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
                    if (comment.userId === req.userId) {
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
    },
    getAllPostCmt: async (req, res) => {
        try {
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
    },
    getAComment: async (req, res) => {

        try {
            const comment = await Comment.findById(req.params.id)
            return res.status(200).json(comment)
        } catch (err) {
            return res.json("Error !")
        }
    },
    likeOrDislike: async (req, res) => {

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
    }
}

module.exports = commentController