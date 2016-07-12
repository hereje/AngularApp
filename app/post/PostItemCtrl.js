angular.module('application').controller('PostItemCtrl',
		['$scope','$log', '$state', '$stateParams', 'Posts', function($scope, $log, $state, $stateParams, Posts) {
			$log.info("Executing controller: PostItemCtrl");
			$scope.post = Posts.get({id: $stateParams.id});
			$scope.save=function(){
				$scope.post.$update(function(){
					alert("The post has been updated");
					$state.go('^');
				});
			};
			$scope.cancel = function(){
				$log.info("Return to posts list");
				$state.go('^');
			};
		} ]);