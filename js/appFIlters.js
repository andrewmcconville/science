app.filter('getYear', function(){
	return function(UTC){
		var date = new Date(UTC);

		return date.getUTCFullYear();
	}
});