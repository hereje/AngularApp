(function(){
	"use strict";
angular.module('application').controller('PostsCtrl',
		['$log', '$state','Posts', PostsCtrl]);
		function PostsCtrl($log, $state, Posts) {
			$log.info("Executing controller: PostsCtrl");
			this.posts = [];
			this.posts = Posts.query(); //using REST; the posts array will be populated when operation finishes.
			this.deletePost = function(post){
				var me = this;
				var deleteItem = confirm("Delete item?"); //Using javascript confirm
				if(deleteItem){
					$log.info("Deleting post with id: " + post.id);
					post.$delete(function(){
						//Remove item from array
						var index = me.posts.indexOf(post);
						if(index>=0)
							me.posts.splice(index,1);
						alert("The post has been deleted");
					});
				}
			};
			this.edit = function(post){
				$state.go('posts.post',{id: post.id});
			};
		}
})();