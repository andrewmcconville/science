app.controller('personCtrl', ['$scope', '$stateParams', 'People', function($scope, $stateParams, People){
	console.log('Person');

	$scope.person = People.getPerson($stateParams.personURL);
	$scope.person.age = new Date($scope.person.deathDate).getUTCFullYear() - new Date($scope.person.birthDate).getUTCFullYear();
}]);