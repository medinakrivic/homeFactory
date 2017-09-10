angular.module('app').controller('furnitureController',furnitureController);

function furnitureController($scope,$location,$window,userDataFactory){
  var vm = this;

  furnitureID='599816d86c80481d98eab290';

  userDataFactory.getProductsByCategory(furnitureID).then(function(response){
    vm.products=response.data;
    console.log(response);
  });
  vm.getOneProduct = function(product_id){
    $location.path('/product/single/'+ product_id);
  }
}
