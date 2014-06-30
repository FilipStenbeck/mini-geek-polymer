'use strict';

/**
 * @ngdoc function
 * @name miniGeekPolymerApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the miniGeekPolymerApp
 */
angular.module('miniGeekPolymerApp')
  .controller('GameCtrl', function ($scope, $routeParams) {
    if ($routeParams && $routeParams.gameId) {
    	$scope.gameId = $routeParams.gameId;
    }

    $scope.handleResponse = function (result) {
    	console.log(result);
    }
  });
