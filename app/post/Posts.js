/*This a resource class and it's really useful with REST */
angular.module('application').factory('Posts', function($resource) {
	return $resource('http://jsonplaceholder.typicode.com/posts/:id',{id:'@id'},{
		//creating custom PUT request
		update: {
			method: 'PUT'
		}
	});
});