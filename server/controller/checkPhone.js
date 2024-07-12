const UserModel = require("../models/UserModel")

const checkPhone = async (req,res)=>
{
    try {
        const {phone} = req.body
        const checkPhone = await UserModel.findOne({phone}).select("-password")
        if(!checkPhone )
        {
            return res.status(400).json({
                message: "User not Exist.",
                error : true
            })
        }
        return res.status(200).json({
            message: "phone verify",
            success: true,
            data :checkPhone
        })


    } catch (error) {
        return res.status(500).json({
            message: error.message|| error,
            error : true,
        })
    }
}
module.exports = checkPhone