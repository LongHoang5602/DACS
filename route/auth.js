const router = require("express").Router()
//import express from 'express';
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
//import bcrypt from 'bcrypt';



//register
router.post("/register", async (req, res) => {
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
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.Secret_Key)
        // save user and respond
        const user = await newUser.save()
        return res.status(200).json({ user: user, token: token })
    } catch (err) {
        return res.json("Error !")
    }
})

// Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(404).json("User not found")
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) {
            return res.status(404).json("Wrong password")
        }
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.Secret_Key)
        return res.status(200).json({ user: user, token: token })
    } catch (err) {
        return res.json("Error !")
    }
})

router.post("/forget", async (req, res) => {
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
})

module.exports = router