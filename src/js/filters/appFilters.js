app.filter('getYear', function(){
	return function(UTC){
		return new Date(UTC).getUTCFullYear();
	}
});

app.filter('getDate', ['$filter', function($filter){
	return function(UTC){
		console.log(UTC);
		if(UTC.length < 8){
			return Math.abs(new Date(UTC).getUTCFullYear());
		} else {
			return $filter('date')(new Date(UTC), 'MMM d, y');
		}
	}
}]);