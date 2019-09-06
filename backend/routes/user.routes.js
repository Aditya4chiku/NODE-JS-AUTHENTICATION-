const userModel = require('../model/user.model');
    require('../middleware/mongoose')
const express = require('express');
const bcrypt = require('bcrypt');
const  checkAuth=require('../middleware/check-auth')
const router = express.Router();
const userRegCtrl=require('../controllers/user.register.controller')


router.post('/register',userRegCtrl.userRegister);

// router.post('/login',checkAuth,userRegCtrl.userLogin);
router.post('/login',userRegCtrl.userLogin);










module.exports=router