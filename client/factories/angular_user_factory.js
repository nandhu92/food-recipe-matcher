myApp.factory('IngredientsFactory', function($http) {
    var factory = {};

    factory.searchIngredient = function(info, callback) {
        //console.log(info);

        $http.post('/get_recipe', info).success(function(output) {
            callback(output);
        })
    };


    factory.saveIngredient = function(info, callback) {
        //console.log(info);

        $http.post('/save_recipe', info).success(function(output) {
            callback(output);
        })
    };
    //registration factory
    factory.register = function(data, callback, errback) {
        $http.post('/register', data).then(callback, errback);
    }

    factory.registerValidate = function(data, callback) {
        //console.log(data);
        $http.post('/registerValidate', data).success(function(output) {
          //console.log(output);
          callback(output);
    })
};

factory.user_login = function(data, callback) {
    console.log(data);
    $http.post('/userLogin', data).success(function(output) {
      //console.log(output);
      callback(output);
})
};
  return factory;
});
