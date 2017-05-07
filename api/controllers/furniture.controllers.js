var dbconn = require('../data/dbconnection.js');
var ObjectId = require('mongodb').ObjectID;

module.exports.productGetAll = function(req,res){
  res
    .status(200)
    .json({"data":true});
}

module.exports.furnitureGetOne = function(req,res){

  var db = dbconn.get();
  var collection = db.collection('accessoriesType');

  var id = req.params.furnitureId;

  collection
    .findOne({
      _id : ObjectId(id)
    }, function(err,doc){
      res
        .status(200)
        .json(doc);
    });


}

module.exports.furnitureGetAllAccessories = function (req,res) {

  var db = dbconn.get();
  var collection = db.collection('accessoriesType');

  collection
    .find()
    .toArray(function(err,docs){
      console.log(docs)
      res
        .status(200)
        .json(docs);
    });



}
