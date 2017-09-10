var dbconn = require('../../data/dbconnection.js');
var mongoose = require('mongoose');
var Product=mongoose.model('Product');
var productCategory=mongoose.model('ProductCategory');

module.exports.adminGetAllProducts = function(req, res){
  Product
    .find()
    .exec(function(err, products){
      console.log(err);
      console.log(products);
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

module.exports.adminCreateProduct = function (req,res){
console.log(req.body);
  Product
    .find({'productName':req.body.productName},function(err, product){

      if (product.length>0)
      {
        res
        .status(200)
        .json({
          "message" : "Product with name " + req.body.productName + " already exists. Choose another name!"
        });
        console.log("Product exists!");
      }else{
        Product
        .create({
          productName: req.body.productName,
          price: req.body.price,
          active: req.body.active,
          productDescription: req.body.productDescription,
          productMeasures: req.body.productMeasures,
          quantity: req.body.quantity,
          productPictures: req.body.productPictures,
          productCategory : req.body.productCategoryId,
          productPictures: req.body.productPictures

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
              .json(product);
          }
        });

  };
});
};

module.exports.adminGetOneProduct = function(req,res){
var ProductId = req.params.ProductId;
  Product
    .findById(ProductId)
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
          "message" : "Product with Id not found" + ProductId
        };
      }
      res
        .status(response.status)
        .json(response.message);

    });
};

module.exports.adminProductUpdate = function (req,res) {

  var ProductId = req.body.ProductId;

            Product
              .findById(ProductId)
              .exec(function(err,product){
                if(err)
                {
                  res.status = 500;
                  res.message = err;
                } else if (!product)  {
                  res.status = 404;
                  res.message = {
                    "message" : "Produce with Id not found" + ProductId
                  };
                }
                  product.productName = req.body.productName;
                  product.price = req.body.price;
                  product.active = req.body.active;
                  product.productDescription = req.body.productDescription;
                  product.productMeasures = req.body.productMeasures;
                  product.quantity = req.body.quantity;
                  product.productCategory=req.body.productCategoryId;
                  product.productPictures=req.body.productPictures;


                product.save(function(err, productUpdated){
                  if(err){
                    console.log(err);
                    res
                      .status(500)
                      .json(err);
                  }else{
                    res
                      .status(204)
                      .json("productUpdated");
                  }
                });

    });
};

module.exports.adminDeleteProduct = function (req,res) {
var ProductId = req.params.ProductId;
console.log(ProductId);

Product
  .findByIdAndRemove(ProductId)
  .exec(function(err,product){
      if(err)
      {
        res.status = 500;
        res.message = err;
      } else if (!product)
      {
        res.status = 404;
        res.message = {
          "message" : "Product with Id not found" + ProductId
        };
      }else{
          console.log("Deleted");
        res
          .status(200)
          .json("Deleted product");
      };

    });

};
