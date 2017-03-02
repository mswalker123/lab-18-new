var app = angular.module('myMod');

app.controller("fizzbuzzController", function($scope, fizzbuzzFactory ){

  $scope.runFactory = function(inputNumber){
    $scope.answer = fizzbuzzFactory.fizzbuzz(inputNumber);
    if (!$scope.display){
      $scope.display = !$scope.display;
    }else{

    };
 }
});


// var app = angular.module('myMod');
//
// app.controller('fbControl', function($scope, fbFactory){
//
// $scope.runFizzBuzz = function(input){
//   $scope.result = fbFactory.fizzbuzz(input);
//   if (!$scope.display){
//     $scope.display = !$scope.display;
//   }else{
//
//   };
// }
// });
