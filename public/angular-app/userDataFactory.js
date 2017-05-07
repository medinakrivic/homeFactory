angular.module('app').factory('userDataFactory',userDataFactory);

function userDataFactory($http){
  return {
    getAllUsers: getAllUsers,
    postUser:postUser
  };

  function getAllUsers(){
    return $http.get('/api/users').then(complete).catch(failed);
  }

function postUser(postedData){

  return $http.post('/api/users', postedData).then(complete).catch(failed);
}

function deleteUser(id)
{
  return $http.delete('/api/users',id).then(complete).catch(failed);
}
  function complete(response) {
    return response;
  }

  function failed(error) {
    console.log(error.statusText);
  }
}
