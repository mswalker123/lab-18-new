var app = angular.module('myMod');

app.directive('ourHeader', function(){
  return {
    restrict: 'EA',
    templateUrl: 'partials/ourHeader.html',
    replace: false
  };
});

app.directive('ourFooter', function(){
  return {
    restrict: 'EA',
    templateUrl: 'partials/ourFooter.html',
    replace: false
  };
});
