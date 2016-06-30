/**
 * This file contains the angularJs app definition
 */
 
/*Module and dependencies */
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
					/*if url does not match with a route then redirect to main page */
					$urlRouterProvider.otherwise("/");
					/*state definition, here you can define single and nested states */
					$stateProvider
							.state(
									'post',
									{
										url : '/post', //url to match
										templateUrl : 'app/post/post.html', //view
										controller : 'PostCtrl' //controller
									})
				});

angular
		.module('application')
		//this function runs one time , when the application starts - i.e. when SPA is loaded-
		.run(
				function($log) {
					// Redirect to main page
					$state.go("/");
					$log.info("Running application");
					});