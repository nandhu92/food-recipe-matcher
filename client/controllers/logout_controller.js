myApp.controller('LogoutController', function($scope, $location, $window, authenticationService) {
  console.log("logout controller");

$scope.logout = function() {
  authenticationService.logout();
  $window.location = 'index.html'
}

  });
