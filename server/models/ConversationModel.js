const mongoose= require("mongoose")

const MessageSchema = new mongoose.Schema({
    text:{
        type: String ,
        default: ""
    },
    imageUrl: {
        type : String,
        default: ""
    },
    video: {
        type : String,
        default: ""
    },
    seen:{
        type : Boolean ,
        default: ""
    }
},{
    timestamps: true,
})

const conversationSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.ObjectId,
        require : true,
        ref : "User"
    },
    receiver:{
        type: mongoose.Schema.ObjectId,
        require : true,
        ref : "User"
    },
    messages: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Message'
        }
    ]

},{
    timestamps: true
})
const MessageModel = mongoose.model("Message",MessageSchema)
const ConversationModel = mongoose.model("conversation",conversationSchema)
module.exports ={ConversationModel,MessageModel}