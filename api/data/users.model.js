var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;

var addressUser = new mongoose.Schema({
  address: String,
  postCode: String,
  city:String
});

var CreditCard = new mongoose.Schema({
  cardNumber:String,
  ExpirationDate: Date,
  CVVNumber: String,
  CardHolder: String
 });

 var Schema = mongoose.Schema,
     ObjectId = Schema.ObjectId;

var products = new mongoose.Schema({

  productName:{
    type:String
  },
  ProductId: String,
  productDescription:String,
  price: String
});

  var userSchema = new mongoose.Schema({
    name: {
      type: String ,
      required: true
    },
    surname: {
      type: String ,
      required: true
    },
    city: String,
    phone: String,
    active: {
      type: Boolean,
      "default": true
    },
    email: {
      type: String ,
      required: true
    },
    password: {
      type: String ,
      required: true
    },
    userName: {
      type:String,
      unique : true,
      required:true
    },
    userType: {
      type: String ,
      required: true
    },
    address:[addressUser],
    products:[products],
    cart:[products],
    creditCards:[CreditCard]
  });

  mongoose.model('User',userSchema,'users');
