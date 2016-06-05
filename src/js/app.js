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
			controller: 'homeCtrl',
			params: {
				metadata: {
					canonical: "",
					name: "Science Time",
					excerpt: "A brief history of science"
				},
			}
		})
		.state('home.era', {
			url: 'era/:eraURL',
			templateUrl: 'html/era.html',
			controller: 'eraCtrl',
			params: {
				metadata: {},
			}
		})
		.state('home.person', {
			url: 'person/:personURL',
			templateUrl: 'html/person.html',
			controller: 'personCtrl',
			params: {
				metadata: {},
			}
		})
		.state('home.personHero', {
			url: 'person-hero/:personURL',
			templateUrl: 'html/person-hero.html',
			controller: 'personCtrl',
			params: {
				metadata: {},
			}
		})
		.state('home.event', {
			url: 'event/:eventURL',
			templateUrl: 'html/event.html',
			controller: 'eventCtrl',
			params: {
				metadata: {},
			}
		})
		.state('home.menu', {
			url: 'menu',
			templateUrl: 'html/menu.html',
			controller: 'menuCtrl',
			params: {
				metadata: {
					canonical: "/menu",
					name: "Science Time Main Menu",
					excerpt: "App Navigation"
				}
			}
		})
		.state('home.menu.about', {
			url: '^/about',
			templateUrl: 'html/about.html',
			controller: 'aboutCtrl',
			params: {
				metadata: {
					canonical: "/about",
					name: "About Science Time",
					excerpt: "An overview of the project"
				}
			}
		})
		.state('home.menu.graphics', {
			url: '^/graphics',
			templateUrl: 'html/graphics.html',
			controller: 'graphicsCtrl',
			params: {
				metadata: {
					canonical: "/graphics",
					name: "Graphic Settings for Science Time",
					excerpt: "Tweak the graphics"
				}
			}
		})
		.state('home.menu.audio', {
			url: '^/audio',
			templateUrl: 'html/audio.html',
			controller: 'audioCtrl',
			params: {
				metadata: {
					canonical: "/audio",
					name: "Audio Settings for Science Time",
					excerpt: "Tweak the audio"
				}
			}
		});

	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');

	//console.log('x');
}]);