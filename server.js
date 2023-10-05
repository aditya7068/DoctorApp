const express = require("express");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const User = require("./models/userModels");
const Doctor = require("./models/doctorModel");
const port = process.env.PORT || 8000;
const path = require('path');


// dotenv config
dotenv.config();
// mongobd connect
connectDB();

// rest object
const app = express();

// Middleware
app.use(express.json());
app.use(moragan('dev'));

// routes
app.use("/api/v1/user", require("./routes/userRoutes"));


// static file
app.use(express.static(path.join(__dirname, './medicare/build')))

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, './medicare/build/index.html'));
});


// listen port
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});



