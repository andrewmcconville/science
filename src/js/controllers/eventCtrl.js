app.controller('eventCtrl', ['$scope', '$stateParams', 'Events', function($scope, $stateParams, Events){
	//console.log('Event');

	$scope.event = Events.getEvent($stateParams.eventURL);
}]);