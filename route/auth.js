const router = require("express").Router()
//import express from 'express';
const User = require("../models/User")
const bcrypt = require("bcrypt")
//import bcrypt from 'bcrypt';



//register
router.post("/register", async (req, res) => {
    try {
        // generate new password        
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        // create new user
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        // save user and respond
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
    }
})

// Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        !user && res.status(404).json("User not found")
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(404).json("Wrong password")
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/forget", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        //const userId = await Post.findById(user.id)
        !user && res.status(404).json("User not found")
        let newPassword = "000000"
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(newPassword, salt)
        user.password = hashedPassword
        await user.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router