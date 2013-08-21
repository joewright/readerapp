'use strict';

angular.module('readsterApp')
	.service('feeder', function feeder($http) {
		var base = 'http://localhost:5000/parse?url=';
		return {
			all: function() {
				return [{
					name: 'DailyJS',
					url: 'feeds.feedburner.com/dailyjs'
				}, {
					name: 'Deadspin',
					url: 'feeds.gawker.com/deadspin/full'
				}, {
					name: 'Reddit',
					url: 'reddit.com/.rss'
				}, {
					name: 'Hacker News',
					url: 'news.ycombinator.com/rss'
				}, {
					name: 'Toothpaste For Dinner',
					url: 'toothpastefordinner.com/rss/rss.php'
				}];
			},
			loadFeed: function(options, callback) {
				if(options.url === -1) {
					return false;
				}
				$http.get(base + options.url).success(function(data) {
					callback(null, data.rss.channel);
				}).error(callback);
			}
		};
	});