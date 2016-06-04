var app = angular.module('science', ['ui.router', 'ngAnimate', 'cfp.hotkeys']);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$compileProvider', function($urlRouterProvider, $stateProvider, $locationProvider, $compileProvider){
	$compileProvider.debugInfoEnabled(false);

	$urlRouterProvider
		.when('/era/', '/')
		.when('/person/', '/')
		.when('/event/', '/')
		.otherwise('/');

	$stateProvider
		.state('root', {
			url: ''
		})
		.state('era', {
			url: '/era/:eraURL',
			templateUrl: 'html/era.html',
			controller: 'eraCtrl'
		})
		.state('person', {
			url: '/person/:personURL',
			templateUrl: 'html/person.html',
			controller: 'personCtrl'
		})
		.state('personHero', {
			url: '/person-hero/:personURL',
			templateUrl: 'html/person-hero.html',
			controller: 'personCtrl'
		})
		.state('event', {
			url: '/event/:eventURL',
			templateUrl: 'html/event.html',
			controller: 'eventCtrl'
		})
		.state('menu', {
			url: '/menu',
			templateUrl: 'html/menu.html',
			controller: 'menuCtrl'
		})
		.state('menu.about', {
			url: '^/about',
			templateUrl: 'html/about.html',
			controller: 'aboutCtrl'
		})
		.state('menu.graphics', {
			url: '^/graphics',
			templateUrl: 'html/graphics.html',
			controller: 'graphicsCtrl'
		})
		.state('menu.audio', {
			url: '^/audio',
			templateUrl: 'html/audio.html',
			controller: 'audioCtrl'
		});

	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');
}]);