const express= require("express")
const register = require("../controller/registerUser")
const checkPhone = require("../controller/checkPhone")
const checkPassword = require("../controller/checkPassword")
const userDetails = require("../controller/userDetails")
const logout = require("../controller/logout")
const updateUser = require("../controller/updateUser")
const router = express.Router()


// Create user api 
router.post("/register", register)
// midd 
router.post("/phone",checkPhone)

router.post("/password",checkPassword)
// login user details
router.get("/userdetails",userDetails)

// logout user
router.get("/logout",logout)

// update user 
router.post ("/update",updateUser)
module.exports=router