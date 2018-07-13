const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    senderId : {
        type: String,
        required : true,
    },
    receiverId:{
        type: String,
        required : true,
    },
    text: {
        type: String,
        required : true,
    }
}, { collection: 'messages' });


// let MessageSchema = new mongoose.Schema({
//     body: String,
//     receiverId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     senderId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }
// });

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message