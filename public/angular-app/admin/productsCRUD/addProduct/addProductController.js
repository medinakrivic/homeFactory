angular.module('app').controller('addProductController',addProductController);

function addProductController($scope,$location,$window,userDataFactory){
  var vm = this;
  vm.isSubmitted = false;
  vm.productCategoryId=null;

  userDataFactory.getAllProductCategories().then(function(response){
    vm.productCategories=response.data;
    vm.test = vm.productCategories.data;
  });

  vm.NewProduct= function(){
    console.log(vm.productCategoryId);
    var postedData={
      productName: vm.productName,
      price: vm.price,
      active: true,
      productDescription: vm.productDescription,
      productMeasures: vm.productMeasures,
      quantity: vm.quantity,
      productPictures: vm.productPictures,
      productCategoryId : vm.productCategoryId
    }
    if(vm.productCategoryId==null){
      vm.messageCategory="This is required filed!";
    }else if(vm.reviewForm.$valid){
      userDataFactory.adminCreateProduct(postedData).then(function(response){
        if(response.status === 200){
          console.log(response.data.message);
          vm.message=response.data.message;
        }else if (response.status === 201) {
          $location.path("/admin/products");
          vm.message="Product Created!";
        }
      }).catch(function(error) {
        console.log(error);
      });
    }else {
      vm.isSubmitted=true;
    }
  }
};
