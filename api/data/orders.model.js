var mongoose=require('mongoose');

var CreditCard = new mongoose.Schema({
  cardNumber:String,
  ExpirationDate: Date,
  CVVNumber: String,
  CardHolder: String
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

var user = new mongoose.Schema({
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
  email: {
    type: String ,
    required: true
  },
  address:[{
      address: String,
      postCode: String,
      city:String
  }]
});

var orderSchema = new mongoose.Schema({
  orderNumber:{
    type: String,
    required : true
  },
  orderDate:{
    type: Date,
    required : true
  },
  productS:
  {
    type: [product],
    required:true
  },
  user:{
    type:user,
    required:true
  },
  quantity: Number,
  creditCard:{
    cardNumber: String,
    ExpirationDate: Date,
    CVVNumber: String,
    CardHolder: String
  }
});

mongoose.model('Order',orderSchema);
