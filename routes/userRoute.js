const express=require('express');
const Router =express.Router()
const UserController=require('../controller/userController')
Router.post('/register-user',UserController.register);
Router.post('/login-user/:email',UserController.Login);
module.exports=Router

