var MongoClient = require('mongodb').MongoClient;

var _conn = null;
var dburl='mongodb://homefactory.tk:gjucUfqH@80.65.165.60:2721/homefactory?authSource=admin';

var open = function(){
  MongoClient.connect(dburl, function(err, db){
    if(err) {
      console.log("DB connection failed",err);
      return;
    }
    _conn=db;
    console.log("DB connection opend",db);
  });
};
var get = function(){
  return  _conn;
};

module.exports = {
  open : open,
  get : get
};
