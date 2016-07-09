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

// Disable debug
/*
angular.module('application').config(
		[ '$compileProvider', function($compileProvider) {
			$compileProvider.debugInfoEnabled(false);
		} ]);
		*/

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
							url: '/posts/:id',
							templateUrl: 'app/post/post.html',
							controller: 'postItemCtrl'
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
						})
						.state('repositories.repository',{
							url: '/repositories/:id',
							templateUrl: 'app/repository/repository.html',
							controller: 'RepositoryCtrl'
						})
						;
							
				});

angular
		.module('application')
		//this function runs one time , when the application starts - i.e. when SPA is loaded-
		.run(
				function($log, $state) {
					// Redirect to main page
					$state.go('home');
					$log.info("Running application");
			});
					