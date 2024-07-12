const getUserDetails = require("../helpers/getUserDetails")
const UserModel = require("../models/UserModel")

const updateUser = async (req,res)=>
{
    try {
        const {name, profile_pc} = req.body
        const token = req.cookies.token||""
        const user = await getUserDetails(token)
        await UserModel.updateOne({_id :user._id},
            {name : name,profile_pc : profile_pc }
        )
        const userInformation = await UserModel.findById(user._id)
        return res.status(200).json({
            message: "user update success! ",
            success: true ,
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message:error.message||error,
            error : true
        })
    }
}
module.exports = updateUser