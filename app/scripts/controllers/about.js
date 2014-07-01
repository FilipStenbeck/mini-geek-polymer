'use strict';

angular.module('miniGeekPolymerApp')
  .controller('AboutCtrl', function ($scope) {

  	$scope.includes = [
	  	'Listing popular games',
	    'Searching for games',
	    'Listing collection',
	    'Viewing game details',
	    'Reading forum posts',
	    'Watching videos',
  	]

	document.querySelector('body').dispatchEvent(new CustomEvent("polymer-ready"));
  });
