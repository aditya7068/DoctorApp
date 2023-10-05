const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Full name is required'],
    },
    phone:{
        type:String,
        required:[true, 'Number is required'],
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
    },
    date:{
        type:Date,
        required:[true, 'Date is required'],
    },
    address:{
        type:String,
        required:[true, 'Address is required'],
    },
});

const doctorModel = mongoose.model("Appointment", doctorSchema);

module.exports = doctorModel;