(function(){
	"use strict";
angular.module('application').controller('RepositoryListCtrl',
		['$scope','$log','repositoryService', RepositoryListCtrl]);
		function RepositoryListCtrl($scope, $log, repositoryService) {
			$log.info("Executing controller: RepositoryListCtrl");
			//model attributes
			$scope.name="";
			$scope.repositories=null;
				$scope.search = function(){
					if(!$scope.name){
						alert("Provide a search term");
						return;
					}
					$scope.repositories = null; //clear array before request
					$log.info("Searching repositories with name: "+ $scope.name);
					repositoryService.search($scope.name).then(function(response){
						$log.info("search complete");
						if(response.data.items.length == 0){
							alert("No data found!");
							return;
						}
						$scope.repositories = response.data.items; //get array
					});
				};
				
				$scope.clear = function(){
					$scope.name = null;
					$scope.repositories = null;
				};
		}
})();