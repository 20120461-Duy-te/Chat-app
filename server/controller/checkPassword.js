const UserModel = require("../models/UserModel")
const jwt =require("jsonwebtoken")
const bcryptjs=require("bcryptjs")
const checkPassword = async(req,res)=>{
    try {

        const {password, userID}= req.body
        
        const user = await UserModel.findById(userID)
        console.log(user.password)
        const verifyPassWord= await bcryptjs.compare(password,user.password)
        if(!verifyPassWord)
        {
            return res.status(400).json({
                message: "Please check Password!",
                error : true,
            })
        }
        /// JWT 
        const  dataPayload = {
            id : user._id,
            phone: user.phone,
        }
        const token = await jwt.sign(dataPayload, process.env.JWT_SECREAT_KEY,{expiresIn:"1d"})/// Lam rox
        /// cookieoption 
        
        const cookieOption ={
            http:true,
            secure: true
        }
        /////////
        return res.cookie('token',token,cookieOption).status(200).json({
            message:"Login success!",
            token :token,
            success: true
        })
      



    } catch (error) {
        return res.status(500).json({
            message:error.message ||error,
            error: true
        })
    }


}
module.exports = checkPassword