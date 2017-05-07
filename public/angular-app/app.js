angular.module('app',['ngRoute']).config(config);

function config($routeProvider){
  $routeProvider
   .when('/', {
      templateUrl: 'angular-app/home/home.html',
      //controller: homeController
    }).when('/register', {
      templateUrl: 'angular-app/register/register.html',
      controller: registerController,
      controllerAs: 'vm'
  }).when('/users' , {
      templateUrl: 'angular-app/users/users.html',
      controller: usersController,
      controllerAs: 'vm'
    }).otherwise({
      redirectTo: '/'
    });
};
