myApp.controller('LoginController', function($scope, $rootScope, $cookies, $window, $location, authenticationService, Flash) {

  $scope.showModal = true;
  var objs = authenticationService.getToken();
  //console.log(objs);

var login_details = {};

if(objs) {
  var message = "Registration was Successfull !";
//  console.log(message);
        Flash.create('success', message);
}



  $scope.cancel = function() {
      $scope.showModal = false;
  };

$scope.login = function() {
   login_details = {
  email : $scope.email,
  password : $scope.password
  }
//console.log(login_details);
  authenticationService.login(login_details)
                .error(function(err){
                  console.log(err.message);
                  $scope.errorMessage = err.message;
              //  alert(err);
                })
                .then(function(){
                //  $location.url("user/display");

                  $scope.showModal = false;
                //  $location.path("displayuser");
                  //console.log("hey there");
               $window.location = 'index.html'
                });



// IngredientsFactory.user_login(login_details, function(data) {
//
// //   if (data.data.errors){
// // $scope.errors = data.data.errors;
// // }
// // else{
// //  $scope.user = data.data;
// // $scope.user_credentials = {username : data.username};
// $cookies.put('userCookie',data.username);
// $rootScope.user_credentials = $cookies.get('userCookie');
// console.log($rootScope.user_credentials);
// console.log($scope.$id);
//
//
// $scope.showModal = false;
// $scope.displayUser = true;
// $location.url("user/display");
// // $window.location = 'index.html'
//
// // }
//
// })
}
  });
