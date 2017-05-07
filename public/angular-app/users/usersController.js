angular.module('app').controller('usersController',usersController);

function usersController($scope,userDataFactory){
  var vm = this;

  userDataFactory.getAllUsers().then(function(response){
    vm.users=response.data;
    console.log(response);
  });



}
