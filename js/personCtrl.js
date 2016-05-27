app.controller('personCtrl', ['$scope', '$stateParams', 'People', function($scope, $stateParams, People){
	console.log('Person');
	$scope.isActiveView = true;

	$scope.person = People.getPerson($stateParams.personURL);
}]);