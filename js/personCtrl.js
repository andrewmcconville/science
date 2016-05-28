app.controller('personCtrl', ['$scope', '$stateParams', 'People', function($scope, $stateParams, People){
	console.log('Person');

	$scope.person = People.getPerson($stateParams.personURL);
}]);