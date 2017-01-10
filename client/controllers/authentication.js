myApp.controller('AuthenticateController', function($scope, $rootScope, $location, authenticationService) {

  var vm = this;
//console.log("got here");
//console.log(this);
    vm.isLoggedIn = authenticationService.isLoggedIn();

    vm.currentUser = authenticationService.currentUser();

    if(vm.currentUser == undefined){
        $rootScope.loggedUser = "";
    } else {
        $rootScope.loggedUser = vm.currentUser.name;
    }

  //  console.log(vm.isLoggedIn);
    //console.log(vm.currentUser);
  //  $location.path('/authenticateUser');



  });
