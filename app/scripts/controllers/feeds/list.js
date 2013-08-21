'use strict';

angular.module('readsterApp')
	.controller('FeedsListCtrl', function($scope, feeder) {
		$scope.feeds = feeder.all();
	});