const User = require("../models/User")
const bcrypt = require("bcrypt")


const userController = {
    updateUser: async (req, res) => {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (err) {
                return res.json("Error !")
            }

        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            })
            return res.status(200).json("Account has been update")
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            if (!user) {
                return res.status(404).json("Account not found")
            } else {
                await User.findByIdAndDelete(user._id)
                return res.status(200).json("Account has been delete")
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            const { password, updateAt, ...other } = user._doc
            res.status(200).json(other)
        } catch (err) {

            return res.status(403).json("err")
        }
    },
    followUser: async (req, res) => {
        if (req.body.userId !== req.params.id) {
            try {
                const user = await User.findById(req.params.id)
                const currentUser = await User.findById(req.body.userId)
                if (!user.followers.includes(req.body.userId)) {
                    await user.updateOne({ $push: { followers: req.body.userId } })
                    await currentUser.updateOne({ $push: { followings: req.params.id } })
                    return res.status(200).json("User have been followed")
                } else {
                    return res.status(403).json("You allready follow this user")
                }
            } catch (err) {
                return res.json("Error !")
            }
        } else {
            return res.status(403).json("You can't follow yourself")
        }

    },
    unfollowUser: async (req, res) => {
        if (req.body.userId !== req.params.id) {
            try {
                const user = await User.findById(req.params.id)
                const currentUser = await User.findById(req.body.userId)
                if (user.followers.includes(req.body.userId)) {
                    await user.updateOne({ $pull: { followers: req.body.userId } })
                    await currentUser.updateOne({ $pull: { followings: req.params.id } })
                    return res.status(200).json("User have been unfollowed")
                } else {
                    return res.status(403).json("You don't follow this user")
                }
            } catch (err) {
                return res.json("Error !")
            }
        } else {
            return res.status(403).json("You can't unfollow yourself")
        }

    }
}
module.exports = userController