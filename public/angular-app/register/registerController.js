angular.module('app').controller('registerController',registerController);

function registerController($scope,$location,userDataFactory){
  var vm = this;
  vm.isSubmitted = false;

  vm.NewUser= function(){
    var postedData ={
      name : vm.name,
      surname : vm.surname,
      email : vm.email,
      phone: vm.phone,
      password : vm.password,
      city : vm.city,
      active:true,
      userType:"user"
    };

    /* $scope.errors = [];

    if (vm.password !== vm.passwordCon) {
       $scope.errors.push({
         message: "Repeated password should be the same as original."
       });
       return;
     }*/

            if (vm.reviewForm.$valid) {
             userDataFactory.postUser(postedData).then(function(response) {
               if (response.status === 200) {
                // $route.reload();
                 $location.url('/');
               }
             }).catch(function(error) {
               console.log(error);
             });
           } else {
             vm.isSubmitted = true;
        }

  }
}
