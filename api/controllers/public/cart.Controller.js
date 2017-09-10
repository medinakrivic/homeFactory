var mongoose = require('mongoose');
var User=mongoose.model('User');
var Product=mongoose.model('Product');
var ObjectID = require('mongodb').ObjectID;

module.exports.addToCart = function (req,res){
  var UserId = req.body.UserId;

    User
      .findById(UserId)
      .exec(function(err,user){
        if(err)
        {
          res.status = 500;
          res.message = err;
          console.log('first '+err);
        } else if (!user)
        {
          res.status = 404;
          res.message = {
            "message" : "User with Id not found" + UserId
          };
        }

        Product.findById(req.body.ProductId)
              .exec(function(err,pro){
                if(err)
                {
              res.status = 500;
              console.log('product: '+err)
              res.message = pro;
            } else if (!pro)
            {
              res.status = 404;
              res.message = {
                "message" : "Product with Id not found"
              };
            }
            pro.ProductId= new ObjectID();
            pro.save(function(err, userUpdated){
            if(err){
              console.log('user: '+err);
              res
                .status(500)
                .json(err);
            }else{

              user.cart.push(pro);
              user
                .save(function(err, userUpdated){
                if(err){
                  console.log('user: '+err);
                  res
                    .status(500)
                    .json(err);
                }else{

                  pro.quantity=pro.quantity-1;
                  if(pro.quantity<=0)
                  {
                    pro.active=false;
                  }

                  pro.save(function(err, userUpdated){
                  if(err){
                    console.log('user: '+err);
                    res
                      .status(500)
                      .json(err);
                  }else{
                    console.log(pro.quantity);
                  }
                });

                  console.log("User update");

                  res
                    .status(204)
                    .json("userUpdate!");
                }
              });

            }
          });


            });

      });
};

module.exports.removeFromCart=function(req,res){
  var UserId = req.body.UserId;
  console.log(req.body);
    User
      .findById(UserId)
      .exec(function(err,user){
        if(err)
        {
          res.status = 500;
          res.message = err;
          console.log('first '+err);
        } else if (!user)
        {
          res.status = 404;
          res.message = {
            "message" : "User with Id not found" + UserId
          };
        }

          user.update({$pull:{cart:{'ProductId':req.body.CartProductID}}})


              .exec(function (err,suc) {
                console.log(err);
                console.log(suc);
                if(err){
                  console.log('user: '+err);
                  res
                    .status(500)
                    .json(err);
                }else{
                  Product.findById(req.body.ProductId)
                        .exec(function(err,pro){
                          if(err)
                          {
                            res.status = 500;
                            console.log('product: '+err);
                      } else if (!pro)
                        {
                            res.status = 404;
                              res.message = {
                                  "message" : "Product with Id not found"
                              };
                          }
                          var br=pro.quantity;
                          pro.quantity=br+1;
                          pro.save(function(err, userUpdated){
                          if(err){
                            console.log('user: '+err);
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
                }


              });


      //}  });




      });
};

module.exports.buyProduct=function(req,res){
  var UserId = req.body.UserId;
  console.log(UserId);

    User
      .findById(UserId)
      .exec(function(err,user){
        if(err)
        {
          res.status = 500;
          res.message = err;
          console.log('first '+err);
        } else if (!user)
        {
          res.status = 404;
          res.message = {
            "message" : "User with Id not found" + UserId
          };
        }
        for(var i=0;i<user.cart.length;i++){
          user.products.push(user.cart[i]);
        }


        user.cart=[];
        user.save(function (err,suc) {
          if(err){
            console.log('user: '+ err);
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
    }
