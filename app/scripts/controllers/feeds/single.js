'use strict';

angular.module('readsterApp')
	.controller('FeedsSingleCtrl', function($scope, $routeParams, feeder) {
		$scope.current = feeder.all()[$routeParams.index] || {index:-1};
		$scope.loadText = "Loading content...";

		feeder.loadFeed($scope.current, function(err, data) {
			$scope.loadText = err;
			$scope.description = data.description;
			$scope.link = data.link;
			$scope.items = data.item;
		});
	});