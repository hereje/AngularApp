var app = angular.module('interceptors', []);

// Intercept all requests and responses
function requestsInterceptor($log, $q) {
	return {
		request : function(request) {
			// Set global timeout, value given in milliseconds
			request.timeout = 2*60*1000; //2 minutes
			return request;
		},

		requestError : function(request) {
			$log.warn("Request Error", request);
			return $q.reject(request); //reject promise
		},

		response : function(res) {
			if(res.data.stat){ //Handling Flickr API errors
				if(res.data.stat == "fail"){
					alert(JSON.stringify(res.data.message));
					return $q.reject(res);
				}
			}
			return res;
		},

		responseError : function(res) {
			//handling http errors
			if (typeof res.data === 'object') {
				$log.warn(res);
				alert(JSON.stringify(res));
			}
			else{
				alert(res);
			}
			return $q.reject(res);
		}
	}
}

app.factory('requestsInterceptor', requestsInterceptor).config(
		function($httpProvider) {
			$httpProvider.interceptors.push('requestsInterceptor');
		});