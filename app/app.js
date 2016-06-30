/**
 * This file contains the angularJs app definition
 */
angular.module('application', [
// angularJs components
'ui.router', 'ngAnimate'
// application components
 ]);

// Disable debug
angular.module('application').config(
		[ '$compileProvider', function($compileProvider) {
			$compileProvider.debugInfoEnabled(false);
		} ]);

// configure our routes
angular
		.module('application')
		.config(
				function($stateProvider, $urlRouterProvider {
					$urlRouterProvider.otherwise("/");
					$stateProvider
							.state(
									'post',
									{
										url : '/post',
										templateUrl : 'app/post/post.html',
										controller : 'PostCtrl'
									})

				});

angular
		.module('application')
		.run(
				function($log) {
					// Redirect to main page
					$state.go("/");
					$log.info("Running application");
					});