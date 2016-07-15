/*This a resource class and it's really useful with REST */
(function(){
	"use strict";
angular.module('application').factory('Posts', ['$resource',Posts]);
function Posts($resource) {
	return $resource('http://jsonplaceholder.typicode.com/posts/:id',{id:'@id'},{
		//creating custom PUT request
		update: {
			method: 'PUT'
		}
	});
}
})();