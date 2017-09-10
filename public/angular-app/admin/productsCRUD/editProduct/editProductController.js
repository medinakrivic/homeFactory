angular.module('app').controller('editProductController',editProductController);

function editProductController($scope,$location,$window,$routeParams,userDataFactory){
  var vm = this;
  vm.isSubmitted = false;
  vm.productStatus=true;

  //get productCategories
  userDataFactory.getAllProductCategories().then(function(response){
    vm.productCategories=response.data;
    vm.test = vm.productCategories.data;
    console.log(vm.productCategories);
  });

  //getProduct
  userDataFactory.getProduct($routeParams.ID).then(function(res){
    console.log(res);
    vm.productName=res.data.productName;
    vm.price=parseFloat(res.data.price);
    vm.productStatus=res.data.active;
    vm.productDescription=res.data.productDescription;
    vm.productMeasures=res.data.productMeasures;
    vm.quantity=parseInt(res.data.quantity,10);
    vm.productCategoryId=res.data.productCategory;
    vm.productPictures= res.data.productPictures;
});



vm.updateProduct = function(){

  var postedData={
    ProductId:$routeParams.ID,
    productName: vm.productName,
    price: vm.price,
    active: vm.productStatus,
    productDescription: vm.productDescription,
    productMeasures: vm.productMeasures,
    quantity: vm.quantity,
    productPictures: vm.productPictures,
    productCategoryId : vm.productCategoryId
  }


console.log(postedData);
  if(vm.productCategoryId==null){
    vm.messageCategory="This is required filed!";
  }else if(vm.reviewForm.$valid){
    userDataFactory.adminUpdateProduct(postedData).then(function(res){
      if(res.status==204){
        console.log("success");
        $window.location.reload;
        vm.message="Product is updated!"
      }
    }).catch(function(error) {
      console.log(error);
    });
  }else {
    vm.isSubmitted=true;
  }



}




};
