const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('codamie','root','suryansh',{ dialect:'mysql',host:"localhost"});

module.exports=sequelize;