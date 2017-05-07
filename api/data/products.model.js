var mongoose = require('mongoose');

var price = new mongoose.Schema({
    currentPrice: String,
    discount:Number,
    oldPrice : String,
    shipping: Boolean,   //free(true) shipping or not(false)
    shippingPrice: String,
    payedPrice: String
});

var productSchema = new mongoose.Schema({

  productName:{
    type:String,
    required:true
  },
  productId:{
    type:String,
    required:true
  },
  price:{
    type:price,
    required:true
  },
  active: {
    type: Boolean,
    required: true,
    "default": true
  },
  productDescription: String,
  productMeasures: String,
  quantity:String,
  productPictures:[Buffer]
});

mongoose.model('Product',productSchema);
