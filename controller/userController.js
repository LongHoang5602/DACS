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
        const id = req.params.id;
        const body = req.body;
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
            return res.status(200).json(user)
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

            return res.status(200).json(user)
        } else {
            return res.status(403).json("You can update only your account")
        }
    }
    ,
    updateProfileImgUser: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        if (req.params.id === req.userId) {
            const user = await User.findById(req.params.id)
            await user.updateOne({
                $set: {
                    profilePicture: req.file.path
                }
            })
            console.log(req.body)
            return res.status(200).json(user)
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
    }
    ,
    findAUser: async (req, res) => {
        const username = req.params.username;

        const users = await User.find({ username: { $regex: username, $options: "i" } }); // tìm kiếm user có username chứa chuỗi tên (không phân biệt hoa thường)
        if (users) {
            return res.status(200).json(users); // trả về danh sách user
        } else {
            return res.status(404).json("Not found");
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