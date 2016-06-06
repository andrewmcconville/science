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
			templateUrl: 'home.html',
			controller: 'homeCtrl',
			params: {
				metadata: {
					canonical: "",
					name: "Science Time",
					excerpt: "A brief history of science",
					published: "2016-06-05T17:00:00+05:00"
				},
			}
		})
		.state('home.era', {
			url: 'era/:eraURL',
			templateUrl: 'era.html',
			controller: 'eraCtrl',
			params: {
				metadata: {},
			}
		})
		.state('home.person', {
			url: 'person/:personURL',
			templateUrl: 'person.html',
			controller: 'personCtrl',
			params: {
				metadata: {},
			}
		})
		.state('home.personHero', {
			url: 'person-hero/:personURL',
			templateUrl: 'person-hero.html',
			controller: 'personCtrl',
			params: {
				metadata: {},
			}
		})
		.state('home.event', {
			url: 'event/:eventURL',
			templateUrl: 'event.html',
			controller: 'eventCtrl',
			params: {
				metadata: {},
			}
		})
		.state('home.menu', {
			url: 'menu',
			templateUrl: 'menu.html',
			controller: 'menuCtrl',
			params: {
				metadata: {
					canonical: "/menu",
					name: "Science Time Main Menu",
					excerpt: "App Navigation",
					published: "2016-06-05T17:00:00+05:00"
				}
			}
		})
		.state('home.menu.about', {
			url: '^/about',
			templateUrl: 'about.html',
			controller: 'aboutCtrl',
			params: {
				metadata: {
					canonical: "/about",
					name: "About Science Time",
					excerpt: "An overview of the project",
					published: "2016-06-05T17:00:00+05:00"
				}
			}
		})
		.state('home.menu.graphics', {
			url: '^/graphics',
			templateUrl: 'graphics.html',
			controller: 'graphicsCtrl',
			params: {
				metadata: {
					canonical: "/graphics",
					name: "Graphic Settings for Science Time",
					excerpt: "Tweak the graphics",
					published: "2016-06-05T17:00:00+05:00"
				}
			}
		})
		.state('home.menu.audio', {
			url: '^/audio',
			templateUrl: 'audio.html',
			controller: 'audioCtrl',
			params: {
				metadata: {
					canonical: "/audio",
					name: "Audio Settings for Science Time",
					excerpt: "Tweak the audio",
					published: "2016-06-05T17:00:00+05:00"
				}
			}
		});

	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');

	//console.log('x');
}]);