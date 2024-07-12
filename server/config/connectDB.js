const mongoose = require("mongoose")

const connect = async ()=>
    {
        try {
             await mongoose.connect(process.env.MONGODB_URL)
             const connecttion= mongoose.connection
             connecttion.on("connected",()=>{
                console.log("Connect to DB")
             })
             connecttion.on("error",(err)=>{
                console.log(err)
             })
        } catch (error) {
            console.log("Something is wrong with connect DB")
        }
    }
module.exports = connect