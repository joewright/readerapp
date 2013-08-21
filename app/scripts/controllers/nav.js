'use strict';

angular.module('readsterApp')
	.controller('NavCtrl', function($scope) {
		$scope.list = [{
			name: 'Main',
			url: '#/'
		}, {
			name: 'Feeds',
			url: '#/feeds'
		}];
	});