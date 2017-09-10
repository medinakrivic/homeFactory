angular.module('app').controller('rugsController',rugsController);

function rugsController($scope,$location,$window,userDataFactory){
  var vm = this;

  rugsID='599997a1513a3a3508b225ee';

  userDataFactory.getProductsByCategory(rugsID).then(function(response){
    vm.products=response.data;
    console.log(response);
  });
  vm.getOneProduct = function(product_id){
    $location.path('/product/single/'+ product_id);
  }
  
};
