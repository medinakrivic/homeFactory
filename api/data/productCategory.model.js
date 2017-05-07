var mongoose = require('mongoose');

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

var productCategorySchema = new mongoose.Schema({
  categoryName:{
    type: String,
    required: true
  },
  products:[product],
  parentCategoryId:{
    type:Number,
    default: null},
  categoryPicture:Buffer
});
