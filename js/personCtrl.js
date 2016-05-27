app.controller('personCtrl', ['$scope', '$stateParams', 'People', function($scope, $stateParams, People){
	console.log('Person');
	$scope.isActiveDetail = true;

	$scope.person = People.getPerson($stateParams.personURL);
}]);