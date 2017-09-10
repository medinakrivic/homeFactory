angular.module('app').controller('editUserController',editUserController);

function editUserController($scope,$window,$location,$routeParams,userDataFactory,AuthFactory,jwtHelper){
  var vm = this;
  vm.userstatus=true;

  userDataFactory.getUser($routeParams.ID).then(function(response){
    console.log(response);
    vm.username= response.data.userName;
    vm.name=response.data.name;
    vm.surname =response.data.surname;
    vm.city =response.data.city;
    vm.phone =response.data.phone;
    vm.email =response.data.email;
    vm.usertype =response.data.userType;
    vm.userstatus =response.data.active;
    vm.products=response.data.products;
  });

  var postedData = {
    UserId:$routeParams.ID,
    active:vm.userstatus
  };

  vm.updateUser = function(){

    postedData.active=vm.userstatus;
    console.log(postedData.active);
    userDataFactory.adminUpdateUser(postedData).then(function(res){
      if(res.status==204){
        console.log("success");
        $window.location.reload;
        vm.message="User is updated!"
      }

    }).catch(function(error) {
      console.log(error);
    });
  }

  vm.closeAlert= function(){
    vm.message=false;
  }



}
