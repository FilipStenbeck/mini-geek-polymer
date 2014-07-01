'use strict';

/**
 * @ngdoc overview
 * @name miniGeekPolymerApp
 * @description
 * # miniGeekPolymerApp
 *
 * Main module of the application.
 */
angular
  .module('miniGeekPolymerApp', [
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/popular', {
        templateUrl: 'views/popular.html',
        controller: 'PopularCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/search/:query', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/gameinfo/:gameId', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .when('/collection', {
        templateUrl: 'views/collection.html',
        controller: 'CollectionCtrl'
      })
      .when('/collection/:query', {
        templateUrl: 'views/collection.html',
        controller: 'CollectionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  angular.module('miniGeekPolymerApp').factory('GeekService', function ($http) {

    return {
        
        //Set URL to the backend service
       ROOT_URL : 'http://mini-geek-service.appspot.com/',
        
        //locally cached data
        hotList : [],
        gameId : '',
        game : {},
        forumList : [],
        prev_forumList : [], 
        selected_node : 'root',
        prev_forumHeader : '',
        prev_node : 'root',
        
        resetFormList : function () {
            this.forumList = [];
            this.selected_node = 'root';
        },  
        getforumPosts : function (callback) {
            var that = this;
            that.prev_forumList = that.forumList;
            $http({
                method : 'GET',
                url : that.ROOT_URL + 'forumlist',
                params : {
                    node :  that.selected_node,
                    game : that.gameId
                         
                }
            }).success(function (data) {
                that.forumList = data.result;
                callback(data);
            });
        }  
    };
  });
