var app = angular.module('interceptors', []);

// Intercept all requests and responses
function requestsInterceptor($log, $q) {
	return {
		request : function(request) {
			// Set global timeout, value given in milliseconds
			request.timeout = 2*60*1000; //2 senconds
			return request;
		},

		requestError : function(request) {
			$log.error("Request Error", request);
			return $q.reject(request); //reject promise
		},

		response : function(res) {
			if(res.data.stat === "fail"){
				$log.error(res);
				return $q.reject(res);
			}
			return res;
		},

		responseError : function(res) {
			$log.error("Response Error", res);
			//handling http errors
			alert(res);
			return $q.reject(res);
		}
	}
}

app.factory('requestsInterceptor', requestsInterceptor).config(
		function($httpProvider) {
			$httpProvider.interceptors.push('requestsInterceptor');
		});