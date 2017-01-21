myApp.controller('SaveController', function($scope, $rootScope, IngredientsFactory) {

  $scope.showModal = true;
//  var objs = authenticationService.getToken();
$scope.cancel = function() {
    $scope.showModal = false;
    $location.path('displayuser');
};
console.log("here");
  var username = {
    name : $rootScope.loggedUser
  }
    //console.log(username);
     $scope.saved_ingredients = [];
    var saved_object = {};
  IngredientsFactory.displaySaved(username,function(data) {
    for(var i in data){
      var list = data[i].ingredientslist;
      for(var j in list){
        //  console.log(list[j].saved);
      saved_object = {
        saved_name : list[j].dish,
         isCollapsed: true,
        saved_list : list[j].saved
      }
      $scope.saved_ingredients.push(saved_object);
      }
    }

//console.log(saved_ingredients);
      //$scope.saved = JSON.parse(data);

    //  $scope.showModal = false;


  })


// if(objs) {
//   var message = "Registration was Successfull !";
// //  console.log(message);
//         Flash.create('success', message);
// }

$scope.removeSavedItem = function (x) {

       $scope.saved_ingredients.splice(x, 1);


   }


  $scope.cancel = function() {
      $scope.showModal = false;
  };


  });
