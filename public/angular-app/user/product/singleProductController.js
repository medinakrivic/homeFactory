angular.module('app').controller('singleProductController',singleProductController);

function singleProductController($scope,$location,$routeParams,$window,userDataFactory,AuthFactory){
  var vm = this;

  userDataFactory.getProduct($routeParams.ID).then(function(res){
    vm.id=$routeParams.ID;
    vm.productName=res.data.productName;
    vm.price=parseFloat(res.data.price);
    vm.productStatus=res.data.active;
    vm.productDescription=res.data.productDescription;
    vm.productMeasures=res.data.productMeasures;
    vm.quantity=parseInt(res.data.quantity,10);
    vm.productCategoryId=res.data.productCategory;
    vm.productPictures= res.data.productPictures;
});
var  postedData = {
    UserId:AuthFactory.id,
    ProductId:$routeParams.ID
  };
vm.addToCart = function(){

  if(!AuthFactory.isLoggedIn){
    vm.message="In order to add item to cart log in!";
  }else {

  userDataFactory.addToCart(postedData).then(function(res){
    console.log(res);
    vm.success="Product is added to cart";
  });

}
}

};
