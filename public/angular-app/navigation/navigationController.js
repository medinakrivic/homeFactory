angular.module('app').controller('navigationController', navigationController);

function navigationController($http, $location, $window, AuthFactory,jwtHelper){
  var vm = this;

  vm.isLoggedIn = function(){

    if(AuthFactory.isLoggedIn){
      var token = $window.sessionStorage.token;
      var decodedToken = jwtHelper.decodeToken(token);
      vm.loggedInUser = decodedToken.username;
      vm.userType=decodedToken.userType;
      vm.id=decodedToken.id;
      AuthFactory.id=decodedToken.id;
      return true;
    }else{
      return false;
    }
  };

  vm.logout = function(){
    AuthFactory.isLoggedIn = false;
    delete $window.sessionStorage.token;
    $window.location.reload();
    $location.path('#/');
  };

  vm.isActiveTab = function(url){
    var currentPath = $location.path().split('/')[1];
    return (url===currentPath ? 'act':'');
  };

  vm.userProfile = function(user_id){
    $location.path('/user/profile/'+ user_id);
  }

  vm.userCart = function(user_id){
    $location.path('/user/cart/'+ user_id);
  }

}
