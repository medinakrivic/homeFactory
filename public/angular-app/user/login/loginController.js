angular.module('app').controller('loginController', loginController);

function loginController($http, $location, $window, AuthFactory,jwtHelper){
  var vm = this;

  vm.isLoggedIn = function(){

    if(AuthFactory.isLoggedIn){
      return true;
    }else{
      return false;
    }
  };

  vm.login = function(){
    console.log(vm.password);
    if(vm.username && vm.password){

      var user={
        username: vm.username,
        password:vm.password
      };

      $http.post('/api/users/login',user).then(function(response){
        if(response.data.success){
          $window.sessionStorage.token = response.data.token;
          var decodedToken = jwtHelper.decodeToken(response.data.token);
          AuthFactory.isLoggedIn = true;
          AuthFactory.userType =decodedToken.userType;
          console.log(AuthFactory.userType);
          $location.path('/');
      }else{
          console.log("not success")
          vm.message=response.data.message;
        }
      }).catch(function(error) {
        console.log(error);
      });
    }
  };


  vm.isActiveTab = function(url){
    var currentPath = $location.path().split('/')[1];
    return (url===currentPath ? 'act':'');
  };
}
