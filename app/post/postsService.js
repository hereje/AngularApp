angular.module('application').service('postsService', function($http, $q) {
	return {
		getPosts: function() {
            return $http.get('http://jsonplaceholder.typicode.com/posts').then(
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