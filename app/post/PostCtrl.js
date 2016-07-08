angular.module('application').controller('PostCtrl',
		['$scope','$log', '$state','Posts', function($scope, $log, $state, Posts) {
			$log.info("Executing controller: PostCtrl");
			$scope.posts = [];
			$scope.posts = Posts.query(); //using REST; the posts array will be populated when operation finishes.
			$scope.deletePost = function(post){
				var deleteItem = confirm("Delete item?"); //Using javascript confirm
				if(deleteItem){
					$log.info("Deleting post with id: " + post.id);
					Posts.delete({id: post.id}, function(){
						//Remove item from array
						var index = $scope.posts.indexOf(post);
						if(index>=0)
							$scope.posts.splice(index,1);
					});
				}
			};
		} ]);