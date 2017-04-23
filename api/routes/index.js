var express = require('express');
var router = express.Router();

var ctrlFurniture = require('../controllers/furniture.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js');

/*router
 .route('/furniture')
 .get(ctrlFurniture.furnitureGetAll);
*/
 router
  .route('/furniture/:furnitureId')
  .get(ctrlFurniture.furnitureGetOne);

router
  .route('/furniture')
  .get(ctrlFurniture.furnitureGetAllAccessories);

router
  .route('/users')
  .get(ctrlUsers.usersGetAll)
  .post(ctrlUsers.userAddNew);

router
  .route('/users/:UserId')
  .get(ctrlUsers.userGetOne)
  .put(ctrlUsers.userUpdate)
  .delete(ctrlUsers.deleteUser);

module.exports = router;
