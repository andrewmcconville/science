app.controller('eventCtrl', ['$scope', '$stateParams', 'Events', function($scope, $stateParams, Events){
	console.log('Event');
	$scope.isActiveDetail = true;

	$scope.event = Events.getEvent($stateParams.eventURL);
}]);