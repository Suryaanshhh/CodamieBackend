const {Sequelize}=require('sequelize');

const sequelize=require('../util/database');


const user=sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER,
        unique:true,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING ,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false
        }
})

module.exports=user

