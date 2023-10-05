const express = require("express");
const { loginController, registerController, authController, applyDoctorController, ListController } = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

// router onject
const router = express.Router();

// routes
// Login || post
router.post('/login', loginController);

// register || post
router.post('/register', registerController);

router.post('/getUserData', authMiddleware , authController); 

router.post('/books', authMiddleware, applyDoctorController);

router.get('/list', authMiddleware, ListController);

module.exports = router;