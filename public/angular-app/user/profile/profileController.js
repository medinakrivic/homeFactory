angular.module('app').controller('profileController',profileController);

function profileController($scope,$routeParams,$window,$location,userDataFactory){
  var vm = this;
  vm.isSubmitted = false;

  userDataFactory.getUser($routeParams.ID).then(function(response){
    console.log(response);
    vm.id=$routeParams.ID;
    vm.username= response.data.userName;
    vm.name=response.data.name;
    vm.surname =response.data.surname;
    vm.city =response.data.city;
    vm.phone =response.data.phone;
    vm.email =response.data.email;
    vm.products=response.data.products;
  });


  vm.updateUser= function(){
    var postedData ={
      id: $routeParams.ID,
      name : vm.name,
      surname : vm.surname,
      email : vm.email,
      phone: vm.phone,
      city : vm.city,
      username: vm.username
    };

    if (vm.reviewForm.$valid) {
     userDataFactory.updateUser(postedData).then(function(response) {

       if(response.status === 200){
         console.log(response.data.message);
         vm.userExists=response.data.message;
       }
       else if (response.status === 204) {
         vm.success="Profile Updated!";
       }
     }).catch(function(error) {
       console.log(error);
     });
   } else {
     vm.isSubmitted = true;
  }

};

vm.deactivateAccount=function(id){
  userDataFactory.deactivateUser(id).then(function(response){
    if (response.status === 204) {
      AuthFactory.isLoggedIn = false;
      delete $window.sessionStorage.token;
      $window.location.reload();
      $location.path('#/');
    }
  }).catch(function(error) {
    console.log(error);
  });
}

}
