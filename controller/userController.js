
const User=require('../model/User')

const bcrypt=require('bcrypt')

exports.register = async (req, res, next) => {
  console.log(req);
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password, 10, async (err, hash) => {
      console.log(err);
      await User.create({
        name: name,
        email: email,
        password: hash,
      })
        .then((data) => {
          console.log(data);
          res.status(201).json({ message:"Done"});
        })
        .catch((err) => console.log(err));
    });
  };
  
  