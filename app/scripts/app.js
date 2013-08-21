'use strict';

angular.module('readsterApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/feeds', {
        templateUrl: 'views/feeds/list.html',
        controller: 'FeedsListCtrl'
      })
      .when('/feeds/:index', {
        templateUrl: 'views/feeds/single.html',
        controller: 'FeedsSingleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
