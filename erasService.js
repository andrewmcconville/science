angular
	.module('science')
    .factory('Eras', function(){
        var eras = [
            {
                name: "Classical",
                startDate: "-000700",
                endDate: "000500"
            },
            {
                name: "Medieval",
                startDate: "000500",
                endDate: "001300"
            },
            {
                name: "Renaissance",
                startDate: "001300",
                endDate: "001700"
            },
            {
                name: "Industrial",
                startDate: "001700",
                endDate: "001900"
            },
            {
                name: "Modern",
                startDate: "001900",
                endDate: "002100"
            }
        ];

        var getURL = function(_elem){
            return _elem.name.toLowerCase().replace(/\s/g, "-");
        };

        var bootstrapArray = function(_array){
            var array = _array;

            for(var i = 0; i < array.length; i++){
                array[i].url = getURL(array[i]);
            }

            return array
        }

        return {
            getEras: function(){
                console.log("eras: " + eras.length);
                return bootstrapArray(eras)
            },
            getEra: function(url){
                var index = eras.map(
                    function(eras){ return eras.url; }
                ).indexOf(url);

                return eras[index];
            }
        }
    });