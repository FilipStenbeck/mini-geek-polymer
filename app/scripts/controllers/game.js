'use strict';


angular.module('miniGeekPolymerApp')
  .controller('GameCtrl', function ($scope, $routeParams) {
    
    var self = this;
    $scope.infoTab = true;
    $scope.forumTab = false;
    $scope.videoTab = false;

    //Set game id in scope
    if ($routeParams && $routeParams.gameId) {
    	$scope.gameId = $routeParams.gameId;
    }
    
    //Visibility of tab content
    $scope.handleTabClicked = function($event) {
		$scope.infoTab = false;
	    $scope.forumTab = false;
	    $scope.videoTab = false;  		
	  	$scope[$event.target.id] = true;
  	};
  	
 });
