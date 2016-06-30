angular.module('resarcimientoWebApp').service('postsService', function($http, $q) {
	return {
		getPosts: function() {
            return $http.jsonp('http://jsonplaceholder.typicode.com/posts').then(
	    		function(response) {
					//prevent get non json objects
	    			if (typeof response.data === 'object') {
	    				// successful response
	    				return response.data;
	    			} else {
	    				// invalid response
	    				return $q.reject(response.data);
	    			}
				}, function(response) {
					// something went wrong
				    return $q.reject(response.data);
				}
           );
        }
    };
});