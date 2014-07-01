'use strict';

angular.module('miniGeekPolymerApp')
  .directive('gameForum', function (GeekService) {
    return {
      templateUrl: 'scripts/directives/forum.html',
      restrict: 'E',
      scope: false,
      link: function postLink($scope, element, attrs) {
         
	    var updateForum = function (data) {
	        $scope.forumList = data.result;
	    };
	    
	    $scope.forumHeader = '<p> Forum </p>';
	    
	    $scope.showUpArrow = function() {
	      return !($scope.forumHeader === '<p> Forum </p>');  
	    };

	    $scope.getNextForumPost = function (id, leaf, title) {
	        if (!leaf) {
	            GeekService.prev_node = GeekService.selected_node;
	            GeekService.prev_forumHeader = $scope.forumHeader;
	            GeekService.selected_node = id;
	            $scope.forumHeader = '<i class="icon-arrow-up"></i>' + '<p> ' + title +  '</p>';
	            GeekService.getforumPosts(updateForum);
	            
	        }
	    };
	    
	    $scope.getPrevForumPost = function () {
	        if (GeekService.selected_node !== 'root') {
	            if (GeekService.forumList[0] === undefined) {
	                GeekService.selected_node = 'root';
	                $scope.forumHeader =  '<p> Forum </p>';
	            } else if (GeekService.prev_forumList[0] === undefined) {
	                GeekService.selected_node = 'root';
	                $scope.forumHeader =  '<p> Forum </p>';
	            } else if (GeekService.forumList[0].leaf === false) {
	                GeekService.selected_node = 'root';
	                $scope.forumHeader =  '<p> Forum </p>';
	            } else if (GeekService.forumList[0].leaf === true) {
	                GeekService.selected_node = GeekService.prev_node;
	                $scope.forumHeader =  GeekService.prev_forumHeader;
	            }
	            GeekService.getforumPosts(updateForum);
	        }
	    };

	    GeekService.getforumPosts(updateForum);
      }
    };
  });
