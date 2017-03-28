app.controller('personCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'People', function($scope, $rootScope, $state, $stateParams, People){
	//console.log('Person');

	$scope.person = People.getPerson($stateParams.personURL);
	$scope.person.age = new Date($scope.person.deathDate).getUTCFullYear() - new Date($scope.person.birthDate).getUTCFullYear();
	$scope.person.ago = (new Date().getUTCFullYear() - new Date($scope.person.birthDate).getUTCFullYear()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	//on first load, update metadata
	$state.current.params.metadata = $scope.person;
	$rootScope.metadata = {
		canonical: '/person/' + $state.current.params.metadata.url,
		pageTitle: $state.current.params.metadata.name,
		title: $state.current.params.metadata.name,
		description: $state.current.params.metadata.excerpt,
		image: 'https://science-time.herokuapp.com/android-chrome-192x192.png',
		name: $state.current.params.metadata.name,
        published: $state.current.params.metadata.published,
        section: $state.current.params.metadata.branch.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1);}) + " Sciences",
        tag: $state.current.params.metadata.professions
	};
}]);