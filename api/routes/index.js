var express = require('express');
var router = express.Router();

var ctrlFurniture = require('../controllers/furniture.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js');
var crtlProductType = require('../controllers/productType.controller.js');
var ctrlAdminProducts = require('../controllers/admin/adminProducts.controller.js');
var ctrlProducts = require('../controllers/public/products.Controller.js');
var ctrlCart = require('../controllers/public/cart.Controller.js');


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
  .put(ctrlUsers.updateUser)
  .delete(ctrlUsers.deleteUser);

router
  .route('/user/deactivateUser/:UserId')
  .put(ctrlUsers.deactivateUser);

  router
    .route('/productType')
    .get(crtlProductType.getAllProductCategories)
    .post(crtlProductType.AddNewProductType);

  router
    .route('/users/login')
    .post(ctrlUsers.login);

  router
    .route('/admin/user/:UserId')
    .put(ctrlUsers.adminUpdateUser);

  router
    .route('/admin/adminProduct')
    .get(ctrlAdminProducts.adminGetAllProducts)
    .post(ctrlAdminProducts.adminCreateProduct);

    router
      .route('/admin/adminProduct/:ProductId')
      .get(ctrlAdminProducts.adminGetOneProduct)
      .put(ctrlAdminProducts.adminProductUpdate)
      .delete(ctrlAdminProducts.adminDeleteProduct);

  router
      .route('/products')
      .get(ctrlProducts.getProducts);

    router
      .route('/products/:ProductCategoryId')
      .get(ctrlProducts.getProductsByCategory);

  router
      .route('/cart')
      .put(ctrlCart.addToCart);
  router
      .route('/deleteCart')
      .put(ctrlCart.removeFromCart);
  router
      .route('/buyProduct')
      .put(ctrlCart.buyProduct);

module.exports = router;
