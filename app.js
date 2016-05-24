var app = angular.module('science', ['ui.router', 'ngAnimate']);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$compileProvider', function($urlRouterProvider, $stateProvider, $locationProvider, $compileProvider){
	$compileProvider.debugInfoEnabled(false);

	$urlRouterProvider
		.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			views: {
				'root': {
					templateUrl: 'home.html',
					controller: 'homeCtrl'
				}
			}
		})
		.state('home.event', {
			url: 'event/:eventURL',
			views: {
				'detail': {
					templateUrl: 'event.html',
					controller: 'eventCtrl'
				}
			}
		})
		.state('home.era', {
			url: 'era/:eraURL',
			views: {
				'detail': {
					templateUrl: 'era.html',
					controller: 'eraCtrl'
				}
			}
		})
		.state('home.person', {
			url: 'person/:personURL',
			views: {
				'detail': {
					templateUrl: 'person.html',
					controller: 'personCtrl'
				}
			}
		})
		.state('home.person.grandchild', {
			url: '/grandchild-:grandID',
			views: {
				'grandchild': {
					templateUrl: 'grandchild.html',
					controller: 'grandCtrl'
				}
			}
		})
		.state('about', {
			url: '/about',
			views: {
				'root': {
					templateUrl: 'about.html',
					controller: 'aboutCtrl'
				}
			}
		})
		.state('home.settings', {
			url: 'settings',
			views: {
				'settings': {
					templateUrl: 'settings.html',
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

app.controller('homeCtrl', ['$scope', '$document', '$timeout', 'Eras', 'Events', 'People', function($scope, $document, $timeout, Eras, Events, People) {
	console.log('Home');

	$scope.isActiveRoot = true;
	$scope.isLoaded = false;

	$scope.eras = Eras.getEras();
	$scope.events = Events.getEvents();
	$scope.people = People.getPeople();

	$scope.pixelsPerYear = 2;

	var jsHome = document.getElementById("js-home"),
		jsTimeScale = document.getElementById("js-time-scale"),
		jsEras = document.getElementById("js-eras"),
		jsEvents = document.getElementById("js-events"),
		jsBottomUI = document.getElementById("js-bottom-ui"),
		firstYear = new Date($scope.eras[0].startDate).getUTCFullYear(),
		lastYear = new Date($scope.eras[$scope.eras.length - 1].endDate).getUTCFullYear();

	//move ui relative to scrollbar's height so scrollbar is not covered by bottom ui
	jsBottomUI.style.bottom = (jsHome.offsetHeight - jsHome.clientHeight) + "px";

	//build time scale
	for(var i = firstYear; i <= lastYear; i += 25) {
		var year;
		year = document.createElement('li');
		year.className = "time-scale__marker";
		year.appendChild(document.createTextNode(Math.abs(i)));
		jsTimeScale.appendChild(year);
	};

	$scope.eventFilters = [
		{name: "life", active: true},
		{name: "logical", active: true},
		{name: "physical", active: false},
		{name: "applied", active: false}
	];

	$scope.filterByBranch = function(_obj){
		for(branch in $scope.eventFilters){
			if($scope.eventFilters[branch].active && _obj.branch == $scope.eventFilters[branch].name){
				return true
			}
		}
	};

	$scope.getLeft = function(_date){
		var	year = new Date(_date).getUTCFullYear();

		return 100 * (Math.abs(firstYear) + year) / (lastYear - firstYear)
	};

	$scope.getLeftMidlife = function(_birthDate, _deathDate){
		var age = new Date(_deathDate).getUTCFullYear() - new Date(_birthDate).getUTCFullYear();
		var midlife = new Date(_birthDate).getUTCFullYear() + (age / 2);
		var	year = new Date(age).getUTCFullYear();

		return 100 * (Math.abs(firstYear) + midlife) / (lastYear - firstYear)
	};

	$scope.getWidthPercent = function(_startDate, _endDate){
		var startYear = new Date(_startDate).getUTCFullYear(),
			endYear = new Date(_endDate).getUTCFullYear();

		return 100 * Math.abs((startYear - endYear) / (lastYear - firstYear))
	};

	$scope.scrollToEra = function(_era){
		console.log(_era);
		jsHome.scrollLeft = document.getElementById("js-era-" + _era).offsetLeft + 300;
	};

	$scope.zoom = function(_amount){
		$scope.pixelsPerYear += _amount;
		
		var ratio = $scope.pixelsPerYear / ($scope.pixelsPerYear - _amount);
		var width = (lastYear - firstYear) * $scope.pixelsPerYear;

		//when zooming in: resize first, then scroll
		if(_amount > 0){
			jsTimeScale.style.width = width + "px";
			jsEras.style.width = width + "px";
			jsEvents.style.width = width + "px";
			jsHome.scrollLeft = jsHome.scrollLeft * ratio - 10;

		//when zooming out: scroll first, then resize
		} else {
			jsHome.scrollLeft = jsHome.scrollLeft * ratio + 10;
			jsTimeScale.style.width = width + "px";
			jsEras.style.width = width + "px";
			jsEvents.style.width = width + "px";
		}
	};

	$scope.setZoom = function(_scale){
		if($scope.pixelsPerYear < _scale){
			while($scope.pixelsPerYear < _scale){
				$scope.zoom(+.5);
			}
		} else {
			while($scope.pixelsPerYear > _scale){
				$scope.zoom(-.5);
			}
		}
	};

	//set initial zoom
	$scope.zoom(2);
	dragscroll.reset();

	//show the main timeline after
	//the view transition is done
	//and everything is loaded
	$document.ready(function(){
		$timeout(function(){
			$scope.isLoaded = true;
		}, 0);
	});
}]);

app.controller('personCtrl', ['$scope', '$stateParams', 'People', function($scope, $stateParams, People){
	console.log('Person');
	$scope.isActiveDetail = true;

	$scope.person = People.getPerson($stateParams.personURL);
}]);

app.controller('eventCtrl', ['$scope', '$stateParams', 'Events', function($scope, $stateParams, Events){
	console.log('Event');
	$scope.isActiveDetail = true;

	$scope.event = Events.getEvent($stateParams.eventURL);
}]);

app.controller('eraCtrl', ['$scope', '$stateParams', 'Eras', function($scope, $stateParams, Eras){
	console.log('Era');
	$scope.isActiveDetail = true;

	$scope.era = Eras.getEra($stateParams.eraURL);
}]);

app.controller('aboutCtrl', ['$scope', function($scope){
	console.log('About');
	$scope.isActiveRoot = true;
}]);

app.controller('settingsCtrl', ['$scope', function($scope){
	console.log('Settings');
	$scope.isActiveSettings = true;
}]);

app.controller('grandCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
	console.log('Grandchild');
}]);

app.filter('getYear', function(){
	return function(UTC){
		var date = new Date(UTC);

		return date.getUTCFullYear();
	}
});