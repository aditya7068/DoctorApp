const mongoose = require("mongoose");
// const validator = require("validator");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is require'],
    },
    email:{
        type:String,
        required:[true,'email is require'],
    },
    password:{
        type:String,
        required:[true,'password is require'],
    },
});

// we need a collection

const userModel = mongoose.model("users",userSchema);

module.exports = userModel;