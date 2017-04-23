angular.module('users').controller('usersController',usersController);

function usersController($http){
  var vm = this;
  $http.get('/api/users').then(function(response){
    console.log(response)
    vm.users = response.data
  });
}
