app.controller('eraCtrl', ['$scope', '$stateParams', 'Eras', function($scope, $stateParams, Eras){
	console.log('Era');

	$scope.era = Eras.getEra($stateParams.eraURL);
}]);