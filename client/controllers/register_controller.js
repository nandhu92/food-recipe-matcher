
myApp.controller('RegisterController', function($scope, $location, authenticationService) {
    $scope.showModal = true;

    $scope.cancel = function() {
        $scope.showModal = false;
    };

    $scope.submitRegister = function() {
        console.log("hereeee");
        var user_details = {
            name: $scope.name,
            username: $scope.userForm.username.$viewValue,
            email: $scope.email,
            password: $scope.password
        }
console.log(user_details);
    //     IngredientsFactory.register(user_details, function(data) {
    //
    //       if (data.data.errors){
    //   $scope.errors = data.data.errors;
    // }
    // else{
    //
    //   $scope.user = "";
    //
    //   $scope.showModal = false;
    //
    // }
    //
    //     }, function(err) {
    //       console.log("checking error message");
    //       console.log(data.data.errors);
    //
    //     })
//console.log("here");
authenticationService.register(user_details)
              .error(function(err){
            //  alert(err);
              })
              .then(function(data){
                console.log(data);
                $scope.showModal = false;

              $location.path('login');

              });
    }

});
