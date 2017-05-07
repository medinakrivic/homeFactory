var mongoose = require('mongoose');

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

var products = new mongoose.Schema({

  productName:{
    type:String,
    required:true
  },
  productId:{
    type:String,
    required:true
  },
  productDescription:String,
  productPictures:[Buffer],   //binary data
  payedPrice: String,
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
    displayName: String,
    userType: {
      type: String ,
      required: true
    },
    address:[addressUser],
    products:[products],
    creditCards:[CreditCard]
  });

  mongoose.model('User',userSchema,'users');
