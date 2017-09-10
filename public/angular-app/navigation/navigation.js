angular.module('app').directive('appNavigation',appNavigation);
function appNavigation(){
  return{
    restrict: 'E',
    templateUrl: 'angular-app/navigation/navigation.html'
  };
}
