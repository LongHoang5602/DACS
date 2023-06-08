const router = require("express").Router()
const authController = require("../controller/authController")
const middlewareController = require("../controller/midlewareController")


//Register
router.post("/register", authController.register)

// Login
router.post("/login", authController.login)

//Logout
router.post("/logout", middlewareController.verifyToken, authController.logoutUser);

//ForgetPwd
router.post("/forgetpwd", authController.forgetPwd)

//RefreshToken
router.post("/refresh", authController.requestRefreshToken);

module.exports = router