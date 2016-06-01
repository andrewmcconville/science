app.filter('getYear', function(){
	return function(UTC){
		return new Date(UTC).getUTCFullYear();
	}
});

app.filter('getDate', ['$filter', function($filter){
	return function(UTC){
		if(UTC < 0){
			return Math.abs(new Date(UTC).getUTCFullYear());
		} else {
			return $filter('date')(new Date(UTC), 'y');
		}
	}
}]);