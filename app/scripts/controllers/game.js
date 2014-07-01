'use strict';

angular.module('miniGeekPolymerApp')
  .controller('GameCtrl', function ($scope, $routeParams, GeekService, $sce) {
    
    $scope.to_trusted = function (html_code) {
       return $sce.trustAsHtml(html_code);
    }

    //Vibility of tab content
    $scope.infoTab = true;
    $scope.forumTab = false;
    $scope.videoTab = false;

    //Set game id in scope and in service
    if ($routeParams && $routeParams.gameId) {
    	$scope.gameId = $routeParams.gameId;
      GeekService.gameId = $routeParams.gameId;
    }
    
    //Visibility of tab content
    $scope.handleTabClicked = function($event) {
		  $scope.infoTab = false;
	    $scope.forumTab = false;
	    $scope.videoTab = false;  		
	  	$scope[$event.target.id] = true;
  	};
  	
 });
