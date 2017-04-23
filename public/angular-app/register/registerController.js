angular.module('registerUser').controller('registerController',registerController);

function registerController($http){
  var vm = this;
  $http.get('api/users').then(function(response))
}
