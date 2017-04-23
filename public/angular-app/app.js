angular.module('registerUser',['ngRoute']).config(config);

function config($routeProvider){
  $routeProvider
    .when('/register',{
      templateUrl: 'register.html',
      contoller: 'RegisterController',
      controllerAs: 'vm'
    });
}

angular.module('users',['ngRoute']).config(config);

function config($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: '/users.html',
    contoller: 'usersController',
    controllerAs: 'vm'
  });
}
