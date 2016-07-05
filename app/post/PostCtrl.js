angular.module('application').controller('PostCtrl',
		['$scope','$log', '$state','Post', function($scope, $log, $state, Post) {
			$log.info("Executing controller: PostCtrl");
			$scope.posts = [];
			$scope.posts = Post.query(); //using REST
			$scope.deletePost = function(id){
				var deleteItem = confirm("Delete item?"); //Using javascript confirm
				if(deleteItem){
					var post = new Post();
					post.id= id;
					var itemDeleted = post.$delete(); //({id: post.id});
				}
			};
		} ]);