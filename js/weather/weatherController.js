var app = angular.module("myMod");

app.controller('weatherController', function($scope, $animate, weatherFactory){
  $scope.findWeather = function(inputCity, inputState){
    var userInputs = {
      city: inputCity,
      state: inputState
    };
    if (!$scope.display){
      $scope.display = !$scope.display;
    }else{

    };

    weatherFactory.getWeather(userInputs);
  }

  $scope.results = weatherFactory.pulledResults();
});

// app.controller('weatherController', function($scope, weatherFactory){
//   $scope.findWeather = function(inputCity, inputState){
//     var userInputs = {
//       city: inputCity,
//       state: inputState
//     };
//     weatherFactory.getWeather(userInputs);
//   }
//
//   $scope.results = weatherFactory.pulledResults();
// });
