'use strict';

/**
 * @ngdoc function
 * @name miniGeekPolymerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the miniGeekPolymerApp
 */
angular.module('miniGeekPolymerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
