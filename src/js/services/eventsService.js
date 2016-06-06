angular
	.module('science')
    .factory('Events', function(){
        var events = [
            {
                name: "Geometry",
                isHero: true,
                branch: "logical",
                people: ["Euclid"],
                startDate: "-000323",
                published: "2016-06-05T17:00:00+05:00"
            },
            {
                name: "Heliocentrism",
                branch: "physical",
                people: ["Aristarchus"],
                startDate: "-000280",
                published: "2016-06-05T17:00:00+05:00"
            },
            {
                name: "Tides",
                branch: "physical",
                people: ["Seleucus"],
                startDate: "-000150",
                published: "2016-06-05T17:00:00+05:00"
            },
            {
                name: "xxx",
                branch: "bbb",
                people: [],
                startDate: "0000",
                published: "2016-06-05T17:00:00+05:00"
            }
        ];

        var getURL = function(_elem){
            return _elem.name.toLowerCase().replace(/\s/g, "-");
        };

        var getLeft = function(_index){
            if((_index + 3) % 3 == 0) {
                return 0
            } else if((_index + 3) % 3 == 1) {
                return 55
            }  else if((_index + 3) % 3 == 2) {
                return 25
            } 
        }

        var bootstrapArray = function(_array){
            var array = _array;

            for(var i = 0; i < array.length; i++){
                array[i].url = getURL(array[i]);
                
                if(array[i].left == null){
                    array[i].left = getLeft(i);
                }
            }

            return array
        }

        return {
            getEvents: function(){
                //console.log("events: " + events.length);
                return bootstrapArray(events)
            },
            getEvent: function(url){
                var index = events.map(
                    function(events){ return events.url; }
                ).indexOf(url);

                return events[index];
            }
        }
    });