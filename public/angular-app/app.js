angular.module('app',['ngRoute','angular-jwt']).config(config).run(run);

function config($httpProvider, $routeProvider){
   $httpProvider.interceptors.push('AuthInterceptor');

  $routeProvider
   .when('/', {
      templateUrl:'angular-app/home/home.html',
       access:{
        restricted:false
      }
      //controller: homeController
    }).when('/user/register', {
      templateUrl: 'angular-app/user/register/register.html',
      controller: registerController,
      controllerAs: 'vm',
      access:{
        restricted:false
      }
  }).when('/user/login',{
      templateUrl: 'angular-app/user/login/login.html',
      controller: loginController,
      controllerAs: 'vm'
    }).when('/user/profile/:ID',{
      templateUrl:'angular-app/user/profile/profile.html',
      controller: profileController,
      controllerAs: 'vm',
      access:{
        restricted:false
      }
    }).when('/user/cart/:ID',{
      templateUrl:'angular-app/user/cart/cart.html',
      controller: cartController,
      controllerAs: 'vm',
      access:{
        restricted:false
      }
    }).when('/products/accessories',{
      templateUrl:'angular-app/navigation/accessories/accessories.html',
      controller: accessoriesController,
      controllerAs: 'vm',
      access:{
        restricted:false
      }
    }).when('/products/furniture',{
      templateUrl:'angular-app/navigation/furniture/furniture.html',
      controller: furnitureController,
      controllerAs: 'vm',
      access:{
        restricted:false
      }
    }).when('/products/lighting',{
      templateUrl:'angular-app/navigation/lighting/lighting.html',
      controller: lightingController,
      controllerAs: 'vm',
      access:{
        restricted:false
      }
    }).when('/products/outdoor',{
      templateUrl:'angular-app/navigation/outdoor/outdoor.html',
      controller: outdoorController,
      controllerAs: 'vm',
      access:{
        restricted:false
      }
    }).when('/products/rugs',{
      templateUrl:'angular-app/navigation/rugs/rugs.html',
      controller: rugsController,
      controllerAs: 'vm',
      access:{
        restricted:false
      }
    }).when('/product/single/:ID',{
      templateUrl:'angular-app/user/product/single.html',
      controller: singleProductController,
      controllerAs: 'vm',
      access:{
        restricted:false
      }
    }).when('/products',{
      templateUrl:'angular-app/navigation/products/products.html',
      controller: productsController,
      controllerAs: 'vm',
      access:{
        restricted:false
      }
    }).when('/products/walldecore',{
      templateUrl:'angular-app/navigation/walldecore/walldecore.html',
      controller: rugsController,
      controllerAs: 'vm',
      access:{
        restricted:false
      }
    }).when('/admin/addUser',{
      templateUrl: 'angular-app/admin/usersCRUD/addUser/addUser.html',
      controller: addUserController,
      controllerAs : 'vm',
      access:{
        restricted:true
      }
    }).when('/admin/editUser/:ID',{
      templateUrl: 'angular-app/admin/usersCRUD/editUser/editUser.html',
      controller: editUserController,
      controllerAs : 'vm',
      access:{
        restricted:true
      }
    }).when('/admin/users' , {
        templateUrl: 'angular-app/admin/usersCRUD/users/users.html',
        controller: usersController,
        controllerAs: 'vm',
        access:{
          restricted:true
        }
      }).when('/admin/products' , {
          templateUrl: 'angular-app/admin/productsCRUD/products/adminProducts.html',
          controller: adminProductsController,
          controllerAs: 'vm',
          access:{
            restricted:true
          }
        }).when('/admin/addProduct' , {
            templateUrl: 'angular-app/admin/productsCRUD/addProduct/addProduct.html',
            controller: addProductController,
            controllerAs: 'vm',
            access:{
              restricted:true
            }
          }).when('/admin/editProduct/:ID' , {
              templateUrl: 'angular-app/admin/productsCRUD/editProduct/editProduct.html',
              controller: editProductController,
              controllerAs: 'vm',
              access:{
                restricted:true
              }
            }).otherwise({
      redirectTo: '/'
    });
  }

  function run($rootScope, $location, $window, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
      event.preventDefault();
      $location.path('/');
    }else if((nextRoute.$$route.originalPath=='/user/register'
              || nextRoute.$$route.originalPath=='/user/login' ) && $window.sessionStorage.token && AuthFactory.isLoggedIn) {
      event.preventDefault();
      $location.path('/');
    }else if((nextRoute.$$route.originalPath=='/admin/users' || nextRoute.$$route.originalPath=='/user/login' || nextRoute.$$route.originalPath=='/admin/addUser' || nextRoute.$$route.originalPath=='/admin/editUser/:ID' ) && $window.sessionStorage.token && AuthFactory.isLoggedIn && AuthFactory.userType==='user') {
      event.preventDefault();
      $location.path('/');
    }
  });
}
