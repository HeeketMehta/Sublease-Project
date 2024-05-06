const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");



exports.signup = (req, res) => {


  console.log("IN THE SIGNUP CONTROLLER OF NODEJS AUTH.CONTROLLER.JS...");


  console.log("OBTAINED NAME FROM THE FORM IS ---- " + req.body.Name);

  User.create({
    username: req.body.UserName,
    email: req.body.Email,
    password: bcrypt.hashSync(req.body.Password, 8),
    name: req.body.Name,
    streetaddress: req.body.Street,
    city: req.body.City,
    state: req.body.State,
    zipcode: req.body.Zipcode
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            role_name: {
              [Op.or]: "user"
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            
            
            const token = jwt.sign({ id: user.email },
              config.secret,
              {
                algorithm: 'HS256',
                allowInsecureKeySizes: true,
                expiresIn: 86400, // 24 hours
              });

              console.log("THE JWT TOKEN IS----- " + token);
            // res.send({ message: "User was registered successfully!" }); 
            res.send({message:"Successfully registered", current_username: req.body.UserName, current_name: req.body.Name, current_email: req.body.UserName, jwt_token: token});
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          // res.send({ message: "User was registered successfully!" });
          const token = jwt.sign({ id: user.email },
            config.secret,
            {
              algorithm: 'HS256',
              allowInsecureKeySizes: true,
              expiresIn: 86400, // 24 hours
            });

            console.log("THE JWT TOKEN IS----- " + token);
          // res.send({ message: "User was registered successfully!" }); 
          res.send({message:"Successfully registered", current_username: req.body.UserName, current_name: req.body.Name, current_email: req.body.UserName, jwt_token: token});
          // res.send({message:"Successfully registered", current_username: req.body.UserName, current_name: req.body.Name, current_email: req.body.UserName});
        });
      }
    })
    .catch(err => {
      console.log(err.message);
      res.status(500).send({ message: err.message });
    });
};






exports.signin = (req, res) => {
  console.log("IN THE AUTH.CONTROLLER.JS SIGNIN FUNCTION ---- " + req.body.UserName);
  User.findOne({
    where: {
      username: req.body.UserName
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.Password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      const token = jwt.sign({ id: user.email },
                              config.secret,
                              {
                                algorithm: 'HS256',
                                allowInsecureKeySizes: true,
                                expiresIn: 86400, // 24 hours
                              });

      var authorities = [];
      user.getRoles().then(roles => {
        // for (let i = 0; i < roles.length; i++) {
        //   authorities.push("ROLE_" + roles[i].name.toUpperCase());
        // }
        console.log("The token in the signin is --- " + token);
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          // roles: authorities,
          jwt_token: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};



exports.TryMethod = (req, res) => {
  res.json({ message: "Welcome to the Sublease Marketplace application.... In the AuthController Try method..." });
}