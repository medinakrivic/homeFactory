angular.module('app').controller('usersController',usersController);

function usersController($scope,$location,$window,userDataFactory){
  var vm = this;

  userDataFactory.getAllUsers().then(function(response){
    vm.users=response.data;
    console.log(response);
  });


vm.userDelete = function(user_id){
console.log(user_id);
  userDataFactory.deleteUser(user_id).then(function(response){
    $window.location.reload();
    console.log(response);
  });

  }

vm.createUser = function(){
  $location.path('/admin/addUser');
}

vm.editUser = function(user_id){
  $location.path('/admin/editUser/'+ user_id);
}

}
