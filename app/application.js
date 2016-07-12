/**
 * This file contains the angularJs app definition
 */

//TODO: Read flickr API methods https://www.flickr.com/services/api/
 
/*Module and dependencies */
angular.module('application', [
// angularJs components
'ui.router', 'ngAnimate', 'ngResource',
// application components
'interceptors', 'constants'
 ]);

// configure our routes
angular
		.module('application')
		.config(
				function($stateProvider, $urlRouterProvider) {
					/*if url does not match with a route then redirect to main page */
					$urlRouterProvider.otherwise("/");
					/*state definition, here you can define single and nested states */
					$stateProvider
						.state('home',{
							url: '/'
						})
						.state('posts',{
								url : '/posts', //url to match
								templateUrl : 'app/post/posts.html', //view
								controller : 'PostsCtrl',
								controllerAs: 'postsCtrl' //Using controllerAs evades the use of $scope
						})
						.state('posts.post',{
							url: '^/posts/:id',
							views: {
								'@': {
									templateUrl: 'app/post/post.html',
									controller: 'PostItemCtrl'
								}
							}
						})
						.state('photos',{
							url: '/photos',
							templateUrl: 'app/photos/PhotoList.html',
							controller: 'PhotoCtrl'
						})
						.state('repositories',{
							url: '/repositories',
							templateUrl: 'app/repository/repositoryList.html',
							controller: 'RepositoryListCtrl'
						});
				});

angular
		.module('application')
		//this function runs once, when the application starts - i.e. when SPA is loaded-
		.run(function($log, $state) {
			// Redirect to main page
			$state.go('home');
			$log.info("Running application");
		});
