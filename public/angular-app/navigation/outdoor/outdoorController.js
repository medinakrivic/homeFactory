angular.module('app').controller('outdoorController',outdoorController);

function outdoorController($scope,$location,$window,userDataFactory){
  var vm = this;

  outdoorID='5998175722f71b07dc68baa0';

  userDataFactory.getProductsByCategory(outdoorID).then(function(response){
    vm.products=response.data;
    console.log(response);
  });
  vm.getOneProduct = function(product_id){
    $location.path('/product/single/'+ product_id);
  }
};
