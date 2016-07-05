angular.module('application').service('repositoryService', function($http, $q) {
	var url_endpoint = "https://api.github.com";
	return {
		search : function (name){
			//TODO: Inject general values
			return $http.get(url_endpoint + "/search/repositories",{ params: {"q": name} }).then(
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
		
		getRepository: function(params) {
			//TODO: Implement function
            return $http.get(url_endpoint + "").then(
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


