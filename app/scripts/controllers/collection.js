'use strict';

angular.module('miniGeekPolymerApp')
  .controller('CollectionCtrl', function ($scope, $routeParams) {
    //Set query in scope
    if ($routeParams && $routeParams.query) {
    	$scope.query = $routeParams.query;
    }
  });
