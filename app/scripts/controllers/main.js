'use strict';

/**
 * @ngdoc function
 * @name miniGeekPolymerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the miniGeekPolymerApp
 */
angular.module('miniGeekPolymerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
