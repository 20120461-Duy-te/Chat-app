const { response } = require("express")
const UserModel = require("../models/UserModel")
// midd 
const bcryptjs = require("bcryptjs")
const register = async (req,res)=>{
    try {
        const {name , phone, email, password,profile_pc} = req.body
        const checkEmail = await UserModel.findOne({phone})
        if(checkEmail)
            {
                return res.status(400).json({
                    message: "Already user exist ",
                    error: true
                })
            }
        const salt = await bcryptjs.genSalt(10)
        const hashPassWord = await bcryptjs.hash(password, salt)
        // //JWT 
        const payload = {
            name,
            phone, 
            email,
            profile_pc,
            password: hashPassWord
        }
        const user = new UserModel(payload)// ch hieur
        const userSave = await user.save()
        return  res.status(201).json({
            message: "Create New User",
            data: userSave,
            //data:checkEmail,
            success: true
        })

      
    } catch (err) {
        return res.status(500).json({
            message: "ahihi",
            err: true
        })
    }
 }
module.exports = register