const getUserDetails = require("../helpers/getUserDetails")

const userDetails = async(req,res)=>
{
    try {
        const token = req.cookies.token || ""
        const user = await getUserDetails(token)
        return res.status(200).json({
            message:"success",
            data:user,
            token:token,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message:error.message || error,
            error:true  
        })
    }
}
module.exports = userDetails