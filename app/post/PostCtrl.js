angular.module('application').controller('PostCtrl',
		['$scope','$log', '$state','postsService', function($scope, $log, $state, postsService) {
			$log.info("Executing controller: PostCtrl");
			$scope.posts = [];
				postsService.getPosts().then(
				function(response){
					$log.log("Getting posts");
					$scope.posts = response.data;
				}
				);
		} ]);