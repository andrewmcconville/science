var app = angular.module('science', ['ui.router', 'ngAnimate', 'cfp.hotkeys']);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$compileProvider', function($urlRouterProvider, $stateProvider, $locationProvider, $compileProvider){
	$compileProvider.debugInfoEnabled(false);

	$urlRouterProvider
		.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			views: {
				'root': {
					templateUrl: 'html/home.html',
					controller: 'homeCtrl'
				}
			}
		})
		.state('home.event', {
			url: 'event/:eventURL',
			views: {
				'detail': {
					templateUrl: 'html/event.html',
					controller: 'eventCtrl'
				}
			}
		})
		.state('home.era', {
			url: 'era/:eraURL',
			views: {
				'detail': {
					templateUrl: 'html/era.html',
					controller: 'eraCtrl'
				}
			}
		})
		.state('home.person', {
			url: 'person/:personURL',
			views: {
				'detail': {
					templateUrl: 'html/person.html',
					controller: 'personCtrl'
				}
			}
		})
		.state('about', {
			url: '/about',
			views: {
				'root': {
					templateUrl: 'html/about.html',
					controller: 'aboutCtrl'
				}
			}
		})
		.state('home.settings', {
			url: 'settings',
			views: {
				'settings': {
					templateUrl: 'html/settings.html',
					controller: 'settingsCtrl'
				}
			}
		});

	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');
}]);

app.controller('appCtrl', ['$scope', '$state', function($scope, $state) {
	console.log('App');
}]);