var dbconn = require('../data/dbconnection.js');
var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
var ProductCategory = mongoose.model('ProductCategory');

module.exports.AddNewProductType = function(req,res) {

  ProductCategory
    .create({
      categoryName:req.body.categoryName,
      products:[req.body.product],
      parentCategoryId:req.body.parentCategoryId,
      categoryPicture:req.body.binary

    },function(err, user){
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

module.exports.getAllProductCategories = function(req, res){
  ProductCategory
    .find()
    .exec(function(err, productCategories){
      console.log(err);
      console.log(productCategories);
      if(err) {
        res
          .status(500)
          .json(err);
      }else {
        res
          .json(productCategories);
      }
    });

};
