const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    postId: {
        type: String,
        require: true
    },
    cmtId: {
        type: String
    },
    decs: {
        type: String,
        max: 500
    },
    img: {
        type: String
    },
    likes: {
        type: Array,
        default: []
    },
    comment: {
        type: Array,
        default: []
    },
},
    { timestamps: true }
)
module.exports = mongoose.model("Comment", CommentSchema)