angular.module('application').service('photoService', function($http, $q) {
	return {
		search : function (tags){
			//TODO: Inject general values
			var params ={
				api_key : "5b5c0ab2bcc36645fd94f4931dac1f77",
				format : "json",
				nojsoncallback : 1
			};
			params.tags = tags; //search criteria
			return $http.get("https://api.flickr.com/services/rest/?method=flickr.photos.search",{params: params}).then(
			function success(response){
				//prevent get non json objects
				if (typeof response.data === 'object') {
					// successful response
					return response;
				} else {
					// invalid response
					return $q.reject(response);
				}
			}, function error(response) {
					// something went wrong
				    return $q.reject(response);
				}
			);
		},
		
		getRecent: function() {
			//TODO: Inject general values
			var params ={
				api_key : "5b5c0ab2bcc36645fd94f4931dac1f77",
				format : "json",
				nojsoncallback : 1
			};
            return $http.get("https://api.flickr.com/services/rest/?method=flickr.photos.getRecent",{params: params}).then(
	    		function success(response) {
					//prevent get non json objects
	    			if (typeof response.data === 'object') {
	    				// successful response
	    				return response;
	    			} else {
	    				// invalid response
	    				return $q.reject(response);
	    			}
				}, function error(response) {
					// something went wrong
				    return $q.reject(response);
				}
           );
        }
    };
});