var dbconn = require('../../data/dbconnection.js');
var mongoose = require('mongoose');
var Product=mongoose.model('Product');

module.exports.getProductsByCategory = function(req, res){
var ProductCategoryId = req.params.ProductCategoryId;
  Product
    .find().and([{'productCategory._id':ProductCategoryId},{'active':true}])
    .exec(function(err, products){
      console.log('test' + products);
      if(err) {
        res
          .status(500)
          .json(err);
      }else {
        res
          .json(products);
      }
    });

};

module.exports.getProducts = function(req, res){
  Product
    .find({'active':true})
    .exec(function(err, products){
      console.log('test' + products);
      if(err) {
        res
          .status(500)
          .json(err);
      }else {
        res
          .json(products);
      }
    });

};

module.exports.buyProducts = function (req,res){
  var UserId = req.body.UserId;


};
