app.controller('homeCtrl', ['$state', '$scope', '$location', '$document', '$timeout', 'Eras', 'Events', 'People', 'hotkeys', function($state, $scope, $location, $document, $timeout, Eras, Events, People, hotkeys) {
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
		console.log('loaded');
		$timeout(function(){
			$scope.isLoaded = true;
		}, 0);
	});

	var mapEscapeKey = function(){
		if($location.path() === "/"){
			hotkeys.add({
				combo: 'esc',
				description: 'Open main menu',
				callback: function() {
					$state.go('home.settings')
				}
			});
		} else {
			hotkeys.add({
				combo: 'esc',
				description: 'Close child view',
				callback: function() {
					$state.go('^')
				}
			});
		}
	};

	mapEscapeKey();

	$scope.$on("$locationChangeSuccess", function(){
		mapEscapeKey();
	});

	hotkeys.add({
		combo: '1',
		description: 'Toggle Life Events',
		callback: function() {
			$scope.eventFilters[0].active = !$scope.eventFilters[0].active;
		}
	});

	hotkeys.add({
		combo: '2',
		description: 'Toggle Logic Events',
		callback: function() {
			$scope.eventFilters[1].active = !$scope.eventFilters[1].active;
		}
	});

	hotkeys.add({
		combo: '3',
		description: 'Toggle Physical Events',
		callback: function() {
			$scope.eventFilters[2].active = !$scope.eventFilters[2].active;
		}
	});

	hotkeys.add({
		combo: '4',
		description: 'Toggle Applied Events',
		callback: function() {
			$scope.eventFilters[3].active = !$scope.eventFilters[3].active;
		}
	});

	hotkeys.add({
		combo: '5',
		description: 'Toggle All Events',
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
		callback: function() {
			$scope.zoom(+.5);
		}
	});

	hotkeys.add({
		combo: 'x',
		description: 'Reset zoom',
		callback: function() {
			$scope.setZoom(4);
		}
	});

	hotkeys.add({
		combo: 'z',
		description: 'Zoom out',
		callback: function() {
			$scope.zoom(-.5);
		}
	});

	hotkeys.add({
		combo: 'q',
		description: 'Jump to Classical Era',
		callback: function() {
			$scope.scrollToEra('Classical');
		}
	});

	hotkeys.add({
		combo: 'w',
		description: 'Jump to Medieval Era',
		callback: function() {
			$scope.scrollToEra('Medieval');
		}
	});

	hotkeys.add({
		combo: 'e',
		description: 'Jump to Renaissance Era',
		callback: function() {
			$scope.scrollToEra('Renaissance');
		}
	});

	hotkeys.add({
		combo: 'r',
		description: 'Jump to Industrial Era',
		callback: function() {
			$scope.scrollToEra('Industrial');
		}
	});

	hotkeys.add({
		combo: 't',
		description: 'Jump to Modern Era',
		callback: function() {
			$scope.scrollToEra('Modern');
		}
	});
}]);