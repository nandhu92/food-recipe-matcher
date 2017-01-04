'use strict';

var myApp = angular.module('myApp', ['ngMessages','ngCookies', 'ngFlash', 'ngRoute', 'angular-loading-bar', 'ui.bootstrap.modal']);

myApp.config(function($routeProvider) {
    $routeProvider
    // .when("/", {
    //     templateUrl: 'partials/homepage.html',
    //     controller: 'RecipeController'
    // })
        .when("/signUp", {
            templateUrl: 'partials/register.html',
            controller: 'RegisterController'
        })
        .when("/login", {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        })
        .when("/save", {
            templateUrl: 'partials/saveRecipe.html',
            controller: 'RecipeController'
        })
        .when("/logOut", {
            templateUrl: '',
            controller: 'LogoutController'
        })
        .when("/displayuser", {
            // redirectTo: "/"
          //  controller: 'AuthenticateController'
          redirectTo: "/"
        })
        // .when("/authenticateUser", {
        //      redirectTo: "/"
        //     //controller: 'AuthenticateController'
        // })
        .otherwise({
            redirectTo: "/"
        });
})


//directive
myApp.directive('usernameAvailable', function(IngredientsFactory, $timeout, $q) {
  return {
    restrict: 'AE',
    require: 'ngModel',
    link: function(scope, elm, attr, model) {
      model.$asyncValidators.usernameExists = function() {
        //here you should access the backend, to check if username exists
        //and return a promise

//console.log();

var value = {
  username : model.$viewValue
}
//console.log(value);
IngredientsFactory.registerValidate(value, function(data) {
//  console.log(scope.username);
//$scope.details = JSON.parse(data);
value = data;
//console.log(data);
    })
        var defer = $q.defer();
        $timeout(function(){
          model.$setValidity('usernameExists', !value);
          defer.resolve;
        }, 1000);
        return defer.promise;
      };
    }
  }
});


myApp.directive('navigation', function() {
  return {
    restrict: 'EA',
        controller: 'AuthenticateController as navvm'
  }
});
