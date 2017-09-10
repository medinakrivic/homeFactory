var mongoose = require('mongoose');

var price = new mongoose.Schema({
    currentPrice: String,
    discount:Number,
    oldPrice : String,
    shipping: Boolean,   //free(true) shipping or not(false)
    shippingPrice: String,
    payedPrice: String
});

var productCategory = new mongoose.Schema({
  productCategoryId: {type: mongoose.Schema.Types.ObjectId},
  categoryName:{
    type: String,
    required: true
  },
});

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var productSchema = new mongoose.Schema({

  productName:{
    type:String,
    required:true
  },
  price:{
    type:String,
    required:true
  },
  active: {
    type: Boolean,
    required: true,
    "default": true
  },
  ProductId: String,
  productDescription: String,
  productMeasures: String,
  quantity:String,
  productPictures:String,
  productCategory: productCategory
});

mongoose.model('Product',productSchema);
