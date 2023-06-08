const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

let refreshTokens = [];

const authController = {
    generateAccessToken: (user) => {
        return jwt.sign(
            {

                id: user.id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_ACCESS_KEY,
            { expiresIn: "2h" }
        );
    },

    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_REFRESH_KEY,
            { expiresIn: "365d" }
        );
    }, requestRefreshToken: async (req, res) => {
        //Take refresh token from user
        const refreshToken = req.cookies.refreshToken;
        //Send error if token is not valid
        if (!refreshToken) return res.status(401).json("You're not authenticated");
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh token is not valid");
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                console.log(err);
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
            //create new access token, refresh token and send to user
            const newAccessToken = authController.generateAccessToken(user);
            const newRefreshToken = authController.generateRefreshToken(user);
            refreshTokens.push(newRefreshToken);
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict",
            });
            res.status(200).json({
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
            });
        });
    },

    login: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email })
            if (!user) {
                return res.status(404).json("User not found")
            }
            const validPassword = await bcrypt.compare(req.body.password, user.password)
            if (!validPassword) {
                return res.status(404).json("Wrong password")
            }
            //Generate access token
            const accessToken = authController.generateAccessToken(user);
            //Generate refresh token
            const refreshToken = authController.generateRefreshToken(user);
            refreshTokens.push(refreshToken);
            //STORE REFRESH TOKEN IN COOKIE
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict",
            })
            res.setHeader('authorization', `Bearer ${accessToken}`)
            const { password, ...others } = user._doc
            return res.status(200).json({ ...others, accessToken })
        } catch (err) {
            return res.status(500).json("Error!")
        }
    },
    //LOG OUT
    logoutUser: async (req, res) => {
        //Clear cookies when user logs out
        refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
        res.clearCookie("refreshToken");
        res.status(200).json("Logged out successfully!");
    },

    register: async (req, res) => {
        try {
            const userExist = await User.findOne({ email: req.body.email })
            if (userExist) {
                return res.status(404).json("User is exist")
            }
            // generate new password        
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(req.body.password, salt)
            // create new user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            })
            const user = await newUser.save()
            return res.status(200).json(user)
        } catch (err) {
            return res.status(500).json("Error !")
        }
    },
    forgetPwd: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email })
            //const userId = await Post.findById(user.id)
            if (!user) {
                return res.status(404).json("User not found")
            }
            let newPassword = "000000"
            const salt = await bcrypt.genSalt(10) //hashcode
            const hashedPassword = await bcrypt.hash(newPassword, salt)
            user.password = hashedPassword
            await user.save()
            return res.status(200).json(user)
        } catch (err) {
            return res.json("Error !")
        }
    }
}

module.exports = authController