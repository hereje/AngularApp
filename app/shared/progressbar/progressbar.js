angular.module('application').directive('progressbar',
		[ '$http', '$timeout', '$log', function($http, $timeout, $log) {
			return {
				restrict : 'A', //restriction to attributes
				templateUrl : 'app/shared/progressbar/progressbar.html',
				link : function(scope, element, attrs) {
					//using element as a modal
					element.modal({
						backdrop : 'static',
						keyboard : false
					});
					scope.isLoading = function() {
						//check for unfinished http operations
						return $http.pendingRequests.length > 0;
					};
					scope.$watch(scope.isLoading, function(v) {
						if (v) {
							element.modal('show');
						} else {
							$timeout(function() {
								element.modal('hide');
							}, 500);
						}
					});
				}
			};
		} ]);