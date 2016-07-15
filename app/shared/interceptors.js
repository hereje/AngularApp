(function () {
	'use strict';
	angular.module('interceptors', []).factory('requestsInterceptor',['$log','$q', requestsInterceptor]);
	angular.module('interceptors').config(
		function ($httpProvider) {
		$httpProvider.interceptors.push('requestsInterceptor');
	});

	// Intercept all requests and responses
	function requestsInterceptor($log, $q) {
		return {
			request : function (request) {
				// Set global timeout, value given in milliseconds
				request.timeout = 2 * 60 * 1000; //2 minutes
				return request;
			},

			requestError : function (request) {
				$log.warn("Request Error", request);
				return $q.reject(request); //reject promise
			},

			response : function (res) {
				return res;
			},

			responseError : function (res) {
				//handling http errors
				if (typeof res.data === 'object') {
					$log.warn(res);
					alert(JSON.stringify(res));
				} else {
					alert(res);
				}
				return $q.reject(res);
			}
		};
	}
})();