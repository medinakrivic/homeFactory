angular.module('app').controller('walldecoreController',walldecoreController);

function walldecoreController($scope,$location,$window,userDataFactory){
  var vm = this;

walldecoreID='599997b2513a3a3508b225ef';

  userDataFactory.getProductsByCategory(walldecoreID).then(function(response){
    vm.products=response.data;
    console.log(response);
  });
  vm.getOneProduct = function(product_id){
    $location.path('/product/single/'+ product_id);
  }
};
