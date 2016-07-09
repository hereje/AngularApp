angular.module('application').controller('PostItemCtrl',
		['$scope','$log', '$state', 'Posts', function($scope, $log, $state, Posts) {
			$log.info("Executing controller: PostItemCtrl");
			this.save=function(post){
				Posts.save(post);
			};
		} ]);