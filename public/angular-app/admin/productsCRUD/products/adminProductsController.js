angular.module('app').controller('adminProductsController',adminProductsController);

function adminProductsController($scope,$location,$window,userDataFactory){
vm = this;

vm.createProduct = function(){
  $location.path('/admin/addProduct');
}


userDataFactory.adminGetAllProducts().then(function(response){
    vm.products=response.data;
    console.log(vm.products);
  });


vm.adminDeleteProduct = function(product_id){
  console.log(product_id);
  userDataFactory.adminDeleteProduct(product_id).then(function(response){

      $window.location.reload();
      console.log(response);

  });

  }

  vm.editProduct = function(user_id){
    $location.path('/admin/editProduct/'+ user_id);
  }


}
