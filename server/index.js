const express = require("express")
const cors = require ("cors")
require('dotenv').config()
const cookiesParser = require("cookie-parser")
const app = express()
const router = require("./router/index")
// DB 
const connectDB=require("./config/connectDB")
const cookieParser = require("cookie-parser")




// midd 
app.use(cookiesParser ())
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json())
// CONTROLLER 
app.get('/',(req,res)=>{
    res.json(
        {
            message: "Server running at"+ PORT
        }
    )
})
// api endpoints
app.use('/api',router)
const PORT = process.env.PORT || 8080
connectDB().then(con =>{
    //console.log(con.connections)
    //console.log("connections succ!")
    app.listen(PORT, ()=> {
        console.log("SERVER is RUNNING at " + PORT)
    })
})

