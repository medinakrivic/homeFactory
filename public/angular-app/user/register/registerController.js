angular.module('app').controller('registerController',registerController);

function registerController($scope,$location,userDataFactory){
  var vm = this;
  vm.checkbox=false;
  vm.isSubmitted = false;

  vm.NewUser= function(){
    console.log("newUser");
    var postedData ={
      name : vm.name,
      surname : vm.surname,
      email : vm.email,
      phone: vm.phone,
      password : vm.password,
      city : vm.city,
      active:true,
      userType:"user",
      username: vm.username
    };

    if(vm.checkbox === false){
      vm.chmessage = "Checkbox is required field!";
    }else if (vm.reviewForm.$valid) {
     userDataFactory.postUser(postedData).then(function(response) {
       console.log("postdata");

       if(response.status === 200){
         console.log(response.data.message);
         vm.message=response.data.message;
       }
       else if (response.status === 201) {
         console.log("Created new user!");
         $location.path("/user/login");
       }
     }).catch(function(error) {
       console.log(error);
     });
   } else {
     vm.isSubmitted = true;
}

}


}
