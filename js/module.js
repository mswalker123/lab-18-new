var app = angular.module('myMod', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/fizzbuzz', {
      controller: 'fizzbuzzController',
      templateUrl: 'fizzbuzz.html'
    })
    .when('/weather', {
      controller: 'weatherController',
      templateUrl: 'weather.html'
    })
    .otherwise({ redirectTo: '/fizzbuzz' });
    $locationProvider.hashPrefix('');
});
