var express = require('express');
var router = express.Router();

var ctrlFurniture = require('../controllers/furniture.controllers.js');

router
 .route('/furniture')
 .get(ctrlFurniture.furnitureGetAll);

 router
  .route('/furniture/:furnitureId')
  .get(ctrlFurniture.furnitureGetOne);

module.exports = router;
