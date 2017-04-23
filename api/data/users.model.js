var mongoose = require('mongoose');

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
      required: true,
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
  });

  mongoose.model('User',userSchema,'Users');
