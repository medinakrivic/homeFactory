angular.module('app').controller('cartController', cartController);

function cartController($http, $location,$routeParams, $window,userDataFactory,AuthFactory){
  var vm = this;
  userDataFactory.getUser($routeParams.ID).then(function(response){

    vm.products=response.data.cart;

  });

  vm.removeFromCart = function(id,productId){
    var postedData = {
      UserId:AuthFactory.id,
      ProductId:id,
      CartProductID:productId
    }
    console.log(postedData.CartProductID);
    userDataFactory.removeFromCart(postedData).then(function(response){
      console.log(response);
      $window.location.reload();
    });
  }

  vm.buyProduct = function(){
    var postedData = {
      UserId:AuthFactory.id
    }
    userDataFactory.buyProduct(postedData).then(function(response){
      $location.path('/user/profile/'+AuthFactory.id);
    });
  }
}
