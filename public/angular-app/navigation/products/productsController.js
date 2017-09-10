angular.module('app').controller('productsController',productsController);

function productsController($scope,$location,$window,userDataFactory){
  var vm = this;

  userDataFactory.getProducts().then(function(response){
    vm.products=response.data;
    console.log('test'+vm.products);
  });

  vm.getOneProduct = function(product_id){
    $location.path('/product/single/'+ product_id);
  }
}
