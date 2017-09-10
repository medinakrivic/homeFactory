angular.module('app').controller('lightingController',lightingController);

function lightingController($scope,$location,$window,userDataFactory){
  var vm = this;

  lightingID='5998174b22f71b07dc68ba9f';

  userDataFactory.getProductsByCategory(lightingID).then(function(response){
    vm.products=response.data;
    console.log(response);
  });
  vm.getOneProduct = function(product_id){
    $location.path('/product/single/'+ product_id);
  }
};
