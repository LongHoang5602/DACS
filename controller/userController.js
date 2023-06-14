const bcrypt = require("bcrypt")
const multer = require('multer')
const path = require('path')
const User = require("../models/User")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, "user" + Date.now() + path.extname(file.originalname))
    }
})

const userController = {
    updateUser: async (req, res) => {
        if (req.params.id === req.userId) {
            if (req.body.password) {
                try {
                    const salt = await bcrypt.genSalt(10)
                    req.body.password = await bcrypt.hash(req.body.password, salt)
                } catch (err) {
                    return res.json("Error !")
                }
            }
            const user = await User.findById(req.params.id)
            await user.updateOne({ $set: req.body })
            console.log(req.body)
            return res.status(200).json("Update successfully")
        } else {
            return res.status(403).json("You can update only your account")
        }

    },
    updateCoverImgUser: async (req, res) => {

        if (req.params.id === req.userId) {
            const user = await User.findById(req.params.id)
            await user.updateOne({
                $set: {
                    coverPicture: req.file.path
                }
            })
            return res.status(200).json("Update successfully")
        } else {
            return res.status(403).json("You can update only your account")
        }
    }
    ,
    updateProfileImgUser: async (req, res) => {
        if (req.params.id === req.userId) {
            const user = await User.findById(req.params.id)
            await user.updateOne({
                $set: {
                    profilePicture: req.file.path
                }
            })
            return res.status(200).json("Update successfully")
        } else {
            return res.status(403).json("You can update only your account")
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
            res.status(500).json("Error!");
        }
    },
    getAUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            const { password, updateAt, ...other } = user._doc
            res.status(200).json(other)
        } catch (err) {
            return res.status(403).json("Error!")
        }
    }
    ,
    findAUser: async (req, res) => {
        const username = req.params.username;
        const users = await User.find({ username: { $regex: username, $options: "i" } })
        if (users) {
            return res.status(200).json(users);
        } else {
            return res.status(404).json("Not found");
        }
    },
    followUser: async (req, res) => {
        if (req.userId !== req.params.id) {
            try {
                const user = await User.findById(req.params.id)
                const currentUser = await User.findById(req.userId)
                if (!user.followers.includes(req.userId)) {
                    await user.updateOne({ $push: { followers: req.userId } })
                    await currentUser.updateOne({ $push: { followings: req.params.id } })
                    return res.status(200).json("User have been followed")
                } else {
                    await user.updateOne({ $pull: { followers: req.userId } })
                    await currentUser.updateOne({ $pull: { followings: req.params.id } })
                    return res.status(200).json("User have been unfollowed")
                }
            } catch (err) {
                return res.json("Error !")
            }
        } else {
            return res.status(403).json("You can't follow yourself")
        }

    },
    uploadCoverImg: multer({
        storage: storage,
        limits: { fileSize: '1000000' },
        fileFilter: (req, file, cb) => {
            const fileTypes = /jpeg|jpg|png|gif/
            const mimeType = fileTypes.test(file.mimetype)
            const extname = fileTypes.test(path.extname(file.originalname))

            if (mimeType && extname) {
                return cb(null, true)
            }
            cb('Give proper files formate to upload')
        }
    }).single('coverPicture')
    , uploadProfileImg: multer({
        storage: storage,
        limits: { fileSize: '1000000' },
        fileFilter: (req, file, cb) => {
            const fileTypes = /jpeg|jpg|png|gif/
            const mimeType = fileTypes.test(file.mimetype)
            const extname = fileTypes.test(path.extname(file.originalname))

            if (mimeType && extname) {
                return cb(null, true)
            }
            cb('Give proper files formate to upload')
        }
    }).single('profilePicture')
}
module.exports = userController