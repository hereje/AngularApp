angular.module('application').controller('PhotoCtrl',
		['$scope','$log','photoService', function($scope, $log, photoService) {
			$log.info("Executing controller: PhotoCtrl");
			//model attributes
			$scope.tags="";
			$scope.photos = null;
				$scope.search = function(){
					if(!$scope.tags){
						alert("Provide at least one tag");
						return;
					}
					$log.info("Searching photos with tag: "+ $scope.tags);
					photoService.search($scope.tags).then(function(response){
						$log.info("search complete");
						$scope.photos = response.data.photos.photo; //get photo array
					});
				};
				$scope.getRecentPhotos = function(){
					$log.info("Searching recent photos");
					photoService.getRecent().then(function(response){
						$log.info("search complete");
						//The response object
						$scope.photos = response.data.photos.photo; //get photo array
					});
				};
				
				$scope.clear = function(){
					$scope.photos = null;
					$scope.tags = null;
				};
				
				$scope.getUrlImage = function(photo){
					//Read about URL  :  https://www.flickr.com/services/api/misc.urls.html
					var url ="https://farm" + photo.farm + ".staticflickr.com/" + photo.server +"/" + photo.id +"_" +  photo.secret + "_m.jpg";
					return url;
				};
		} ]);