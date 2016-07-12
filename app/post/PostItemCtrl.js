angular.module('application').controller('PostItemCtrl',
		['$scope','$log', '$state', '$stateParams', 'Posts', function($scope, $log, $state, $stateParams, Posts) {
			$log.info("Executing controller: PostItemCtrl");
			$scope.post = Posts.get({id: $stateParams.id});
			$scope.save=function(isValid){
				if(isValid){
					$scope.post.$update(function(){
						alert("The post has been updated");
						$state.go('^');
					});
				}
				else
					alert("Form is invalid"); //test this adding comments to submit button
			};
			$scope.cancel = function(){
				$log.info("Return to posts list");
				$state.go('^');
			};
		} ]);