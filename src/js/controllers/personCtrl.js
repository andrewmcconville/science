app.controller('personCtrl', ['$scope', '$rootScope', '$stateParams', 'People', function($scope, $rootScope, $stateParams, People){
	console.log('Person');

	$scope.person = People.getPerson($stateParams.personURL);
	$scope.person.age = new Date($scope.person.deathDate).getUTCFullYear() - new Date($scope.person.birthDate).getUTCFullYear();

	$rootScope.metadata = {
		'canonical': '/person/' + $scope.person.url,
		'pageTitle': $scope.person.name,
		'title': $scope.person.name,
		'description': $scope.person.excerpt,
		'image': 'https://science-time.herokuapp.com/android-chrome-192x192.png',
		'name': $scope.person.name
	};
}]);