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
    .find({'userName':req.body.username},function(err, user){
      console.log(user.length);
      if (user.length>0)
      {
        console.log(user.length);
        res
        .status(200)
        .json({
          "message" : "User with userName " + req.body.username + " already exists. Choose another username!"
        });
        console.log("Username exists!");
      }else{
        User
        .create({
          name: req.body.name,
          surname: req.body.surname,
          email: req.body.email,
          password : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
          city: req.body.city,
          userName: req.body.username,
          userType: req.body.userType,
          phone: req.body.phone,
          active : req.body.active

        }, function(err, response){
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
});
};

module.exports.adminUpdateUser = function (req,res){
  var UserId = req.body.UserId;
  console.log(UserId);

    User
      .findById(UserId)
      .exec(function(err,user){
        if(err)
        {
          res.status = 500;
          res.message = err;
        } else if (!user)
        {
          res.status = 404;
          res.message = {
            "message" : "User with Id not found" + UserId
          };
        }
          console.log(req.body.active);
          user.active = req.body.active;
          console.log(user.active);
        user
          .save(function(err, userUpdated){
          if(err){
            res
              .status(500)
              .json(err);
          }else{
            console.log("User update");
            res
              .status(204)
              .json("userUpdate!");
          }
        });


      });
};
module.exports.updateUser = function (req,res){
  var UserId = req.body.id;
  console.log(UserId);
  User
    .find({'userName':req.body.username},function(err, user){
      if (user.length>0 && user[0]._id!=UserId)
      {
        res
        .status(200)
        .json({
          "message" : "User with userName " + req.body.username + " already exists. Choose another username!"
        });
        console.log("Username exists!");
      }else{
    User
      .findById(UserId)
      .exec(function(err,user){
        if(err)
        {
          res.status = 500;
          console.log(err);
        } else if (!user)
        {
          res.status = 404;
          res.message = {
            "message" : "User with Id not found" + UserId
          };
        }

        user.name = req.body.name;
        user.surname = req.body.surname;
        user.email = req.body.email;
        user.phone = req.body.phone;
        user.city = req.body.city;
        user
          .save(function(err, userUpdated){
          if(err){
            console.log(err);
            res
              .status(500)
              .json(err);
          }else{
            res
              .status(204)
              .json("userUpdate!");
          }
        });


      });
    };
    });
};
module.exports.deactivateUser = function (req,res){
  var UserId = req.params.UserId;

    User
      .findById(UserId)
      .exec(function(err,user){
        if(err)
        {
          res.status = 500;
          console.log(err);
        } else if (!user)
        {
          res.status = 404;
          res.message = {
            "message" : "User with Id not found" + UserId
          };
        }

        user.active= false;
        user
          .save(function(err, userUpdated){
          if(err){
            console.log(err);
            res
              .status(500)
              .json(err);
          }else{
            res
              .status(204)
              .json("userUpdate!");
          }
        });


      });
};
module.exports.deleteUser = function (req,res) {
var UserId = req.params.UserId;

User
  .findByIdAndRemove(UserId)
  .exec(function(err,user){
      var response = {
        status : 200,
        message: user
      };
      if(err)
      {
        response.status = 500;
        response.message = err;
      } else if (!user)
      {
        response.status = 404;
        response.message = {
          "message" : "User with Id not found" + UserId
        };
      }
      if(response.statu !==200){
        res
          .status(response.status)
          .json(response.message);
      }else{
        User.active = false;
      };

    });

};


module.exports.login = function(req,res){
   User.findOne({
     userName: req.body.username
   }).exec(function(err,user){
     console.log(user);
     if(err){
       res
         .status(400)
         .json(err);
     }else if(!user){
       res
          .status(200)
          .json({success:false, message: "User with username "+ req.body.username + " does not exists. Please enter valid username!"});
     }else if(user.active==false){
       res
          .status(200)
          .json({success:false, message: "User with username "+ req.body.username + " is inactive. Please contact administrator of system (admin@homefactory.tl)!"});


     }else{
       if(bcrypt.compareSync(req.body.password,user.password)){
               var token=jwt.sign({username: user.userName,userType: user.userType,id:user._id}, 's3cr3t',{expiresIn:3600});
               res
                 .status(200)
                 .json({success:true, token:token});
             }else{
             res
               .status(200)
               .json({success:false, message: "Wrong password!"});
             }
     }
   })
};

module.exports.authenticate = function(req,res,next){
  var headerExists = req.headers.authorization;
  if(headerExists){
    var token = req.headets.authorization.split(' ')[1];
    jwt.verify(token,'s3cr3t', function(error, decoded){
      if(error){
        console.log(error);
        res
          .status(401)
          .json('Unauthorized');
      }else{
        req.user = decoded.username;
        next();
      }
    });
  }else{
    res
      .status(403)
      .json('Token not providede');
  }
}
