const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const user=require('./model/User');
const Router=require('./routes/userRoute')
const sequelize=require('./util/database');
app.use(bodyParser.json({extended:false}));
sequelize.sync();


app.use(Router)
app.listen(5000)