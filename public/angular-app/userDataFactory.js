angular.module('app').factory('userDataFactory',userDataFactory);

function userDataFactory($http){
  return {
    getAllUsers: getAllUsers,
    postUser:postUser,
    deleteUser: deleteUser,
    login:login,
    getUser:getUser,
    adminUpdateUser:adminUpdateUser,
    adminGetAllProducts:adminGetAllProducts,
    adminDeleteProduct:adminDeleteProduct,
    getAllProductCategories:getAllProductCategories,
    adminCreateProduct:adminCreateProduct,
    getProduct:getProduct,
    adminUpdateProduct:adminUpdateProduct,
    getProductsByCategory:getProductsByCategory,
    getProducts:getProducts,
    updateUser:updateUser,
    deactivateUser:deactivateUser,
    addToCart:addToCart,
    removeFromCart:removeFromCart,
    buyProduct:buyProduct
  };

  function getAllUsers(){
    return $http.get('/api/users').then(complete).catch(failed);
  }

function postUser(postedData){

  return $http.post('/api/users', postedData);
}

function deleteUser(id)
{
  return $http.delete('/api/users/'+ id).then(complete).catch(failed);
}

function updateUser(postedData)
{
  return $http.put('/api/users/'+ postedData.id,postedData).then(complete).catch(failed);
}
function addToCart(postedData)
{
  return $http.put('/api/cart/',postedData).then(complete).catch(failed);
}
function removeFromCart(postedData)
{
  return $http.put('/api/deleteCart/',postedData).then(complete).catch(failed);
}
function buyProduct(postedData)
{
  return $http.put('/api/buyProduct/',postedData).then(complete).catch(failed);
}
function deactivateUser(id)
{
  return $http.put('/api/user/deactivateUser/'+ id).then(complete).catch(failed);
}

function login(user){
  return $http.post('/api/users/login',user).then(complete).catch(failed);
}
function getUser(id){
  return $http.get('/api/users/'+id).then(complete).catch(failed);
}

function getAllProductCategories(){
  return $http.get('/api/productType').then(complete).catch(failed);
}

function getProductsByCategory(id){
  return $http.get('/api/products/'+id).then(complete).catch(failed);
}

function getProducts(){
  return $http.get('/api/products/').then(complete).catch(failed);
}
//admin
//users
function adminUpdateUser(postedData){
  return $http.put('/api/admin/user/'+postedData.UserId,postedData).then(complete).catch(failed);
}

function adminGetAllProducts(){
  return $http.get('/api/admin/adminProduct').then(complete).catch(failed);
}
//products
function adminDeleteProduct(id)
{
  return $http.delete('/api/admin/adminProduct/'+ id).then(complete).catch(failed);
}

function adminCreateProduct(postedData){
  return $http.post('/api/admin/adminProduct',postedData).then(complete).catch(failed);
}

function getProduct(id){
  return $http.get('/api/admin/adminProduct/'+id).then(complete).catch(failed);
}
function adminUpdateProduct(postedData){
  return $http.put('/api/admin/adminProduct/'+postedData.ProductId,postedData).then(complete).catch(failed);
}
//Response functions
function complete(response) {
    return response;
  }

function failed(error) {
    console.log(error.statusText);
  }
}
