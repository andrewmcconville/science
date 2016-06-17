app.controller('homeCtrl', ['$state', '$scope', '$rootScope', '$location', '$document', '$timeout', 'Eras', 'Events', 'People', 'hotkeys', function($state, $scope, $rootScope, $location, $document, $timeout, Eras, Events, People, hotkeys) {
	//console.log('Home');

	$scope.isLoaded = false;
	$scope.showExpAnimation = false;
	$scope.userLevel = 1;

	$scope.eras = Eras.getEras();
	$scope.events = Events.getEvents();
	$scope.people = People.getPeople();

	$scope.pixelsPerYear = 2;

	var jsHome = document.getElementById("js-home"),
		jsTimeScale = document.getElementById("js-time-scale"),
		jsEras = document.getElementById("js-eras"),
		jsEvents = document.getElementById("js-events"),
		jsBottomUI = document.getElementById("js-bottom-ui"),
		userExploredEvents = [],
		firstYear = new Date($scope.eras[0].startDate).getUTCFullYear(),
		lastYear = new Date($scope.eras[$scope.eras.length - 1].endDate).getUTCFullYear();

	//move ui relative to scrollbar's height so scrollbar is not covered by bottom ui
	jsBottomUI.style.bottom = (jsHome.offsetHeight - jsHome.clientHeight) + "px";

	//build time scale
	for(var i = firstYear; i <= lastYear; i += 25) {
		var year;
		year = document.createElement('span');
		year.className = "time-scale__marker";
		year.appendChild(document.createTextNode(Math.abs(i)));
		jsTimeScale.appendChild(year);
	};

	$scope.peopleFilters = [
		{name: "life", active: true},
		{name: "logical", active: true},
		{name: "physical", active: true},
		{name: "applied", active: true}
	];

	$scope.eventFilters = [
		{name: "life", active: true},
		{name: "logical", active: true},
		{name: "physical", active: true},
		{name: "applied", active: true}
	];

	$scope.toggleFilter = function(_filter){
		//console.log(_filter);
		_filter.active = !_filter.active;
	};

	$scope.filterPeople = function(_person){
		//console.log('filter');
		for(filter in $scope.peopleFilters){
			if($scope.peopleFilters[filter].active &&
			   $scope.peopleFilters[filter].name == _person.branch){
				return true
			}
		}
	};

	$scope.filterEvents = function(_event){
		//console.log('filter');
		for(filter in $scope.eventFilters){
			if($scope.eventFilters[filter].active &&
			   $scope.eventFilters[filter].name == _event.branch){
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

	$scope.getEra = function(_birthDate){
		for(var i = 0; $scope.eras.length > i; i++){
			if(new Date(_birthDate).getUTCFullYear() < new Date($scope.eras[i].endDate).getUTCFullYear()){
				//console.log($scope.eras[i].name);
				return $scope.eras[i].name.toLowerCase();
			}
		}
	};

	$scope.scrollToEra = function(_era){
		console.log(_era);
		$state.go('home');
		jsHome.scrollLeft = document.getElementById("js-era-" + _era).offsetLeft;
	};

	$scope.updateUserExploredEvents = function(_event){
		//if(userExploredEvents.indexOf(_event) + 1){
		//} else {
			userExploredEvents.push(_event);
			updateLevel();
			animateExp1();
		//}
	};

	var levelCaps = [2, 5, 9];
	console.log('Level: ' + $scope.userLevel + ' Total: ' + userExploredEvents.length + ' Level Req: ' + levelCaps[0] + ' Progress: ' + 0);
	function updateLevel(){
		var levelCap = 0;
		var progress = 0;

		if(userExploredEvents.length < levelCaps[0]){
			$scope.userLevel = 1;
			levelRequirement = levelCaps[0];
			progress = userExploredEvents.length;
			animateExp3(progress, levelRequirement);
			console.log('Level: ' + $scope.userLevel + ' Total: ' + userExploredEvents.length + ' Level Req: ' + levelRequirement + ' Progress: ' + progress);

		} else if(userExploredEvents.length < levelCaps[1]){
			$scope.userLevel = 2;
			levelRequirement = levelCaps[1] - levelCaps[0];
			progress = userExploredEvents.length - levelCaps[0];
			animateExp3(progress, levelRequirement);
			console.log('Level: ' + $scope.userLevel + ' Total: ' + userExploredEvents.length + ' Level Req: ' + levelRequirement + ' Progress: ' + progress);

		} else if(userExploredEvents.length < levelCaps[2]){
			$scope.userLevel = 3;
			levelRequirement = levelCaps[2] - levelCaps[1];
			progress = userExploredEvents.length - levelCaps[1];
			animateExp3(progress, levelRequirement);
			console.log('Level: ' + $scope.userLevel + ' Total: ' + userExploredEvents.length + ' Level Req: ' + levelRequirement + ' Progress: ' + progress);

		} else {
			$scope.userLevel = 4;
			levelRequirement = levelCaps[3] - levelCaps[2];
			progress = userExploredEvents.length - levelCaps[2];
			animateExp3(progress, levelRequirement);
			console.log('Level: ' + $scope.userLevel + ' Total: ' + userExploredEvents.length + ' Level Req: ' + levelRequirement + ' Progress: ' + progress);

		}
	};

	function animateExp1(){
		$scope.showExpAnimation = true;
		$timeout(function(){
			$scope.showExpAnimation = false;
			animateExp2();
		}, 16);
	};

	function animateExp2(){
		$scope.showExpAnimation2 = true;
		$timeout(function(){
			$scope.showExpAnimation2 = false;
			//animateExp3();
		}, 480);
	};

	function animateExp3(_progress, _requirement){
		$timeout(function(){
			console.log('prog: '  + _progress + ' req: ' + _requirement);
			$scope.expProgressWidth = _progress / _requirement * 100;
		}, 480);
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
	//dragscroll.reset();

	//show the main timeline after
	//the view transition is done
	//and everything is loaded
	$document.ready(function(){
		//console.log('loaded');
		$timeout(function(){
			$scope.isLoaded = true;
		}, 0);
	});

	var mapEscapeKey = function(){
		if( $location.path() === "/"){
			hotkeys.add({
				combo: 'esc',
				description: 'Open main menu',
				allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
				callback: function() {
					$state.go('home.menu');
				}
			});
		} else {
			hotkeys.add({
				combo: 'esc',
				description: 'Close child view',
				allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
				callback: function() {
					$state.go('^');
				}
			});
		}
	};

	mapEscapeKey();

	$scope.$on("$locationChangeSuccess", function(){
		//console.log($location);
		mapEscapeKey();
	});

	hotkeys.add({
		combo: '1',
		description: 'Toggle Life People',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			$scope.toggleFilter($scope.peopleFilters[0]);
		}
	});

	hotkeys.add({
		combo: '2',
		description: 'Toggle Logic People',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			$scope.toggleFilter($scope.peopleFilters[1]);
		}
	});

	hotkeys.add({
		combo: '3',
		description: 'Toggle Physical People',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			$scope.toggleFilter($scope.peopleFilters[2]);
		}
	});

	hotkeys.add({
		combo: '4',
		description: 'Toggle Applied People',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			$scope.toggleFilter($scope.peopleFilters[3]);
		}
	});

	hotkeys.add({
		combo: '5',
		description: 'Toggle All People',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			if($scope.peopleFilters[0].active && $scope.peopleFilters[1].active && $scope.peopleFilters[2].active && $scope.peopleFilters[3].active){
				$scope.peopleFilters[0].active = false;
				$scope.peopleFilters[1].active = false;
				$scope.peopleFilters[2].active = false;
				$scope.peopleFilters[3].active = false;
			} else {
				$scope.peopleFilters[0].active = true;
				$scope.peopleFilters[1].active = true;
				$scope.peopleFilters[2].active = true;
				$scope.peopleFilters[3].active = true;
			}
		}
	});

	hotkeys.add({
		combo: '6',
		description: 'Toggle Life Events',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			$scope.toggleFilter($scope.eventFilters[0]);
		}
	});

	hotkeys.add({
		combo: '7',
		description: 'Toggle Logic Events',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			$scope.toggleFilter($scope.eventFilters[1]);
		}
	});

	hotkeys.add({
		combo: '8',
		description: 'Toggle Physical Events',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			$scope.toggleFilter($scope.eventFilters[2]);
		}
	});

	hotkeys.add({
		combo: '9',
		description: 'Toggle Applied Events',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			$scope.toggleFilter($scope.eventFilters[3]);
		}
	});

	hotkeys.add({
		combo: '0',
		description: 'Toggle All Events',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			if($scope.eventFilters[0].active && $scope.eventFilters[1].active && $scope.eventFilters[2].active && $scope.eventFilters[3].active){
				$scope.eventFilters[0].active = false;
				$scope.eventFilters[1].active = false;
				$scope.eventFilters[2].active = false;
				$scope.eventFilters[3].active = false;
			} else {
				$scope.eventFilters[0].active = true;
				$scope.eventFilters[1].active = true;
				$scope.eventFilters[2].active = true;
				$scope.eventFilters[3].active = true;
			}
		}
	});

	hotkeys.add({
		combo: 'c',
		description: 'Zoom in',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			$scope.zoom(+.5);
		}
	});

	hotkeys.add({
		combo: 'x',
		description: 'Reset zoom',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			$scope.setZoom(4);
		}
	});

	hotkeys.add({
		combo: 'z',
		description: 'Zoom out',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			$scope.zoom(-.5);
		}
	});

	hotkeys.add({
		combo: 'q',
		description: 'Jump to Classical Era',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			$scope.scrollToEra('Classical');
		}
	});

	hotkeys.add({
		combo: 'w',
		description: 'Jump to Medieval Era',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			$scope.scrollToEra('Medieval');
		}
	});

	hotkeys.add({
		combo: 'e',
		description: 'Jump to Renaissance Era',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			$scope.scrollToEra('Renaissance');
		}
	});

	hotkeys.add({
		combo: 'r',
		description: 'Jump to Industrial Era',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			$scope.scrollToEra('Industrial');
		}
	});

	hotkeys.add({
		combo: 't',
		description: 'Jump to Modern Era',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function() {
			$scope.scrollToEra('Modern');
		}
	});
}]);