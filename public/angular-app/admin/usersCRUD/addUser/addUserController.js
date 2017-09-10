angular.module('app').controller('addUserController',addUserController);

function addUserController($scope,$location,userDataFactory){
  var vm = this;
  vm.isSubmitted = false;
  vm.userType=null;


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
      userType:vm.userType,
      username: vm.username
    };
    console.log(vm.userType);
    if(vm.userType !== 'admin' && vm.userType !== 'user'){
      vm.chmessage = "Usertype is required field!";
    }else if (vm.reviewForm.$valid) {
      console.log('test');
     userDataFactory.postUser(postedData).then(function(response) {
       if(response.status === 200){
         console.log(response.data.message);
         vm.message=response.data.message;
       }
       else if (response.status === 201) {
         console.log("Created new user!");
         $location.path("/admin/users");
       }
     }).catch(function(error) {
       console.log(error);
     });
   } else {
     vm.isSubmitted = true;
}

}


}
