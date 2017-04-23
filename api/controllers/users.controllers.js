var mongoose = require('mongoose');
var User=mongoose.model('User');

module.exports.usersGetAll = function(req, res){

  User
    .find()
    .exec(function(err, users){
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

  User
    .create({
      name: req.body.name,
      surname: req.body.surname

    }, function(err, user){
      if(err)
      {
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
          doc.name = req.body.name;
          //add all param
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
  .findByIdAndRemove(UserId)
  .exec(function(err,user){
    if(err){
      res
        .status(404)
        .json(err);
    }else{
      res
        .status(204)
        .json();
    }
  });

};
