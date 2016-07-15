(function(){
	"use strict";
angular.module('application').service('photoService',['$http', '$q', 'FLICKR' ,photoService]);
function photoService($http, $q, FLICKR) {
	function getFailure(res){
		if(res.data.stat){ //Handling Flickr API errors
			if(res.data.stat == "fail"){
				alert(JSON.stringify(res.data.message));
				return $q.reject(res);
			}
		}
		return res;
	}
	return {
		search : function (tags){
			//TODO: Inject general values
			var params  = FLICKR;
			params.tags = tags; //search criteria
			return $http.get("https://api.flickr.com/services/rest/?method=flickr.photos.search",{params: params}).then(
			function success(response){
				//prevent get non json objects
				if (typeof response.data === 'object') {
					return getFailure(response);
				} else {
					// invalid response
					return $q.reject(response);
				}
			}, function error(response) {
					// something went wrong
				    return $q.reject(response);
				}
			);
		},
		
		getRecent: function() {
			//TODO: Inject general values
			var params =  FLICKR;
            return $http.get("https://api.flickr.com/services/rest/?method=flickr.photos.getRecent",{params: params}).then(
	    		function success(response) {
					//prevent get non json objects
	    			if (typeof response.data === 'object') {
	    				return getFailure(response);
	    			} else {
	    				// invalid response
	    				return $q.reject(response);
	    			}
				}, function error(response) {
					// something went wrong
				    return $q.reject(response);
				}
           );
        }
    };
}
})();