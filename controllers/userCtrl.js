const userModel = require('../models/userModels');
const doctorModel = require("../models/doctorModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const registerController = async (req, res) => {
    try{
        const existingUser = await userModel.findOne({email:req.body.email});
        if(existingUser){
            return res.status(200).send({message:'User Already Exist', success:false});
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
        req.body.password = hashedPassword;
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).send({message:'Registered Successfully', success:true});
    } catch(error){
         console.log(error);
         res.status(500).send({success:false, message:`Register Controller ${error.message}`});
    }
};


const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({email:req.body.email});
        if(!user){
            return res.status(200).send({message:'User not found', success:false});
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if(!isMatch){
            res.status(200).send({message:'Invalid Email or Password', success:false});
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn:'1d',});
        res.status(200).send({message:'Login Successful', success:true, token });
    } catch (error) {
        console.log(error);
         res.status(500).send({success:false, message:`Error in Login CTRL ${error.message}`});
    }
};


const authController = async (req, res) => {
    try {
      const user = await userModel.findById({ _id: req.body.userId });
      user.password = undefined;
      if (!user) {
        return res.status(200).send({
          message: "user not found",
          success: false,
        });
      } else {
        res.status(200).send({
          success: true,
          data: user,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "auth error",
        success: false,
        error,
      });
    }
  };


  const applyDoctorController = async (req, res) => {
    try {
        const newDoctor = new doctorModel({...req.body});
        await newDoctor.save();
        res.status(201).send({message:'Registered Successfully', success:true});
    } catch (error) {
      console.log(error);
      res.status(500).send({ 
        message: "Error while Applying for Doctor",
        success: false,
        error,
      });
    }
  };


  const ListController = async (req, res) => {
    
    try {
      const list = await doctorModel.find({});
      res.status(200).send({
        success: true,
        message: "Doctor Appointments List",
        data: list
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in fetching Appointment List",
        error
      });
    }

  };

module.exports = {loginController,registerController,authController,applyDoctorController,ListController};