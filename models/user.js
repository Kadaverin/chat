const mongoose = require('mongoose');
const bcrypt = require ('mongoose-bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    login: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        bcrypt: true,
    },
    email: {
        type: String,
        validate: [validateEmail, 'invalid emailф'],
        required: true
    },
    age: Number,
    bio: {
        type: String,
        default: '',
    },    
} , { collection: 'users' } )

function validateEmail(email){
    return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

UserSchema.plugin(bcrypt);

const User = mongoose.model("User", UserSchema);

module.exports = User;