app.controller('appCtrl', ['$scope', '$rootScope', '$state', '$stateParams', function($scope, $rootScope, $state, $stateParams){
	//console.log('App');

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		//when state is changed, update metadata
		$rootScope.metadata = {
			'canonical': toState.params.metadata.url,
			'pageTitle': toState.params.metadata.name,
			'title': toState.params.metadata.name,
			'description': toState.params.metadata.excerpt,
			'image': 'https://science-time.herokuapp.com/android-chrome-192x192.png',
			'name': toState.params.metadata.name
		};
	});
}]);