const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required:[true, "Empty Name!"]
    } , 
    phone:{
        type : String,
        required:[true, "Empty Email!"],
        unique : true
    },
    email : {
        type : String,
        required:[true, "Empty Email!"]
    }  , 
    password : {
        type : String,
        required:[true, "Empty PassWord!"]
    } ,   
    profile_pic : {
        type : String, 
        default:""
    }

},{
     timestamps : true // can lam rox 
})
const UserModel = mongoose.model("User",userSchema)
module.exports = UserModel