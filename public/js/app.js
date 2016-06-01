var app = angular.module('science', ['ui.router', 'ngAnimate', 'cfp.hotkeys']);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$compileProvider', function($urlRouterProvider, $stateProvider, $locationProvider, $compileProvider){
	$compileProvider.debugInfoEnabled(false);

	$urlRouterProvider
		.when('/era/', '/')
		.when('/person/', '/')
		.when('/event/', '/')
		.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'html/home.html',
			controller: 'homeCtrl'
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
		.state('home.personHero', {
			url: 'person-hero/:personURL',
			templateUrl: 'html/person-hero.html',
			controller: 'personCtrl'
		})
		.state('home.event', {
			url: 'event/:eventURL',
			templateUrl: 'html/event.html',
			controller: 'eventCtrl'
		})
		.state('home.menu', {
			url: 'menu',
			templateUrl: 'html/menu.html',
			controller: 'menuCtrl'
		})
		.state('home.menu.about', {
			url: '^/about',
			templateUrl: 'html/about.html',
			controller: 'aboutCtrl'
		})
		.state('home.menu.graphics', {
			url: '^/graphics',
			templateUrl: 'html/graphics.html',
			controller: 'graphicsCtrl'
		})
		.state('home.menu.audio', {
			url: '^/audio',
			templateUrl: 'html/audio.html',
			controller: 'audioCtrl'
		});

	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');
}]);

app.filter('getYear', function(){
	return function(UTC){
		return new Date(UTC).getUTCFullYear();
	}
});

app.filter('getDate', ['$filter', function($filter){
	return function(UTC){
		if(UTC < 0){
			return Math.abs(new Date(UTC).getUTCFullYear());
		} else {
			return $filter('date')(new Date(UTC), 'y');
		}
	}
}]);