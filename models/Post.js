const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    decs: {
        type: String,
        max: 500
    },
    img: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        }
    },
    likes: {
        type: Array,
        default: []
    },
},
    { timestamps: true }
)
module.exports = mongoose.model("Post", PostSchema)