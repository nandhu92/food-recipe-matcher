myApp.controller('RecipeController', function($scope, $rootScope, $cookies, IngredientsFactory) {

  $scope.showModal = true;
//   $scope.myCookieVal = $cookies.get('cookie');
//   $scope.setCookie = function(val) {
//     $cookies.put('cookie',val);
// }

  //$scope.completeRecipeList = [];
        //      "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"
        // ];
        $scope.complete = function(string){
             $scope.hidethis = false;
             var output = [];
             angular.forEach($scope.countryList, function(country){
                  if(country.toLowerCase().indexOf(string.toLowerCase()) >= 0)
                  {
                       output.push(country);
                  }
             });
             $scope.filterCountry = output;
        }
        $scope.fillTextbox = function(string){
             $scope.country = string;
             $scope.hidethis = true;
        }

    $scope.displayIngredients = [];
    $scope.displayIngredientsList = [];
    $scope.formData = {};

    // $scope.$watch('search', function() {
    //      fetch();
    //    });

    $scope.searchUserIngredients = function() {

      $scope.errortext = "";
      if (!$scope.formData.searchText) {return;}
      if ($scope.displayIngredients.indexOf($scope.formData.searchText) == -1) {
            $scope.displayIngredients.push($scope.formData.searchText);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
$rootScope.userIngredientsList = $scope.displayIngredients;


         $scope.formData.searchText = "";



        IngredientsFactory.searchIngredient($scope.displayIngredients, function(data) {

            $scope.details = JSON.parse(data);


        })
    };


    $scope.removeItem = function (x) {
           $scope.errortext = "";
           $scope.displayIngredients.splice(x, 1);

            IngredientsFactory.searchIngredient($scope.displayIngredients, function(data) {

               $scope.details = JSON.parse(data);

       })
     };



  $scope.search = "";


    $scope.saveIngredientName = function() {
  //console.log($scope.displayIngredients);
        var save_details = {
          name : $rootScope.loggedUser,
          ingredients : $rootScope.userIngredientsList,
          saveName : $scope.saveName
        }

        IngredientsFactory.saveIngredient(save_details, function(data) {

          //  $scope.details = JSON.parse(data);
            $scope.showModal = false;
          //  console.log($scope.details);
              })
    };




    $scope.select = function() {
        this.setSelectionRange(0, this.value.length);
    }
});
