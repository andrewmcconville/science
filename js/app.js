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
			templateUrl: 'html/event.html',
			controller: 'eventCtrl'
		})
		.state('home.era', {
			url: 'era/:eraURL',
			templateUrl: 'html/era.html',
			controller: 'eraCtrl'
		})
		.state('home.person', {
			url: 'person/:personURL',
			templateUrl: 'html/person.html',
			controller: 'personCtrl'
		})
		.state('home.settings', {
			url: 'settings',
			templateUrl: 'html/settings.html',
			controller: 'settingsCtrl'
		})
		.state('home.about', {
			url: 'about',
			templateUrl: 'html/about.html',
			controller: 'aboutCtrl'
		});

	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');
}]);

app.controller('appCtrl', ['$scope', '$state', function($scope, $state) {
	console.log('App');
}]);