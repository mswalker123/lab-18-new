var app = angular.module('myMod');

app.factory('weatherFactory', function($http){
var  weatherData = {};

return {
  getWeather: function(userInputs) {
    $http({
      method: 'GET',
      url: 'http://api.wunderground.com/api/1edf21c58b490e4c/conditions/q/' + userInputs.state + '/' + userInputs.city + '.json'
    }).then(function success(response) {
      var retrievedData = response;
      weatherData.temp = retrievedData.data.current_observation.temp_f;
      weatherData.weather = retrievedData.data.current_observation.weather;
    }, function(error) {
      console.log(error);
    });
  },
  pulledResults: function() {
    return weatherData;
  }
}

});

// app.factory('yodaFactory', function($http) {
//
//
//   var api = 'https://yoda.p.mashape.com/yoda?sentence=';
//
//   function yodaTalks(text) {
//       var configHeaders = {
//           headers: {
//             'Accept': 'text/plain',
//             'X-Mashape-Key': 'mBGAHq4pJjmshqlSFqOni9EMV1hSp1W6hTbjsnhlF2LvIq5oKQ'
//           }
//         };
//
//         return $http.get(api + text, configHeaders).then(function(yodaSpeech) {
//             return yodaSpeech;
//           },function() {
//                 throw new Error("Error Retrieving the yoda speech");
//         });
//     }
// });
