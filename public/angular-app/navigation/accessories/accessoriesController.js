angular.module('app').controller('accessoriesController',accessoriesController);

function accessoriesController($scope,$location,$window,userDataFactory){
  var vm = this;
  accessoriesID='599815fd6c80481d98eab28f';

  userDataFactory.getProductsByCategory(accessoriesID).then(function(response){
    vm.products=response.data;
    console.log(response);
  });

  vm.getOneProduct = function(product_id){
    $location.path('/product/single/'+ product_id);
  }
}
