var mongoose = require('mongoose');
var User=mongoose.model('User');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

module.exports.usersGetAll = function(req, res){
  User
    .find()
    .exec(function(err, users){
      console.log(err);
      console.log(users);
      if(err) {
        res
          .status(500)
          .json(err);
      }else {
        res
          .json(users);
      }
    });

};

module.exports.userGetOne = function(req,res){
var UserId = req.params.UserId;

  User
    .findById(UserId)
    .exec(function(err,doc){
      var response = {
        status : 200,
        message: doc
      };
      if(err)
      {
        response.status = 500;
        response.message = err;
      } else if (!doc)
      {
        response.status = 404;
        response.message = {
          "message" : "User with Id not found" + id
        };
      }
      res
        .status(response.status)
        .json(response.message);

    });
};

module.exports.userAddNew = function (req,res){
console.log(req.body);
  User
    .create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
      city: req.body.city,
      userType: req.body.userType,
      phone: req.body.phone,
      active : req.body.active

    }, function(err, user){
      if(err)
      {
        console.log(err);
        res
          .status(400)
          .json(err);
      }else {
        res
          .status(201)
          .json(user);
      }
    });

};

module.exports.userUpdate = function (req,res) {
  var UserId = req.params.UserId;

    User
      .findById(UserId)
    //  .select("") to exclude param
      .exec(function(err,doc){
        var response = {
          status : 200,
          message: doc
        };
        if(err)
        {
          response.status = 500;
          response.message = err;
        } else if (!doc)
        {
          response.status = 404;
          response.message = {
            "message" : "User with Id not found" + id
          };
        }
        if(response.statu !==200){
          res
            .status(response.status)
            .json(response.message);
        }else{
          User.name = req.body.name;
          User.surname = req.body.name;
          User.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
          User.email = req.body.email;
          User.phone = req.body.email;
        };

        doc.save(function(err, userUpdated){
          if(err){
            res
              .status(500)
              .json(err);
          }else{
            res
              .status(204)
              .json();
          }
        })


      });
};

module.exports.deleteUser = function (req,res) {
var UserId = req.params.UserId;

User
  .findById(UserId)
  .exec(function(err,user){
      var response = {
        status : 200,
        message: doc
      };
      if(err)
      {
        response.status = 500;
        response.message = err;
      } else if (!doc)
      {
        response.status = 404;
        response.message = {
          "message" : "User with Id not found" + id
        };
      }
      if(response.statu !==200){
        res
          .status(response.status)
          .json(response.message);
      }else{
        User.active = false;
      };

      doc.save(function(err, userUpdated){
        if(err){
          res
            .status(500)
            .json(err);
        }else{
          res
            .status(204)
            .json();
        }
      })

    });

};
