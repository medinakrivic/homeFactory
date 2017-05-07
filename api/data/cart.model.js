var mongoose = require('mongoose');

var user = new mongoose.Schema({
  name: {
    type: String ,
    required: true
  },
  surname: {
    type: String ,
    required: true
  },
  email: {
    type: String ,
    required: true
  }
});

var product = new mongoose.Schema({

  productName:{
    type:String,
    required:true
  },
  productId:{
    type:String,
    required:true
  },
  productDescription: String,
  productMeasures: String,
  payedPrice: String
});

var cartSchema = new mongoose.Schema({
  user: {
    type: user,
    required: true
  },
  products:{
    type:[product],
    required:true
  },
  cartTime :{
    type:Date,
    required:true
  },
  totalPrice : String
});


mongoose.model('Cart',cartSchema);
