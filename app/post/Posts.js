angular.module('application').factory('Posts', function($resource) {
	return $resource('http://jsonplaceholder.typicode.com/posts/:id',{},{
		query: {
			method: 'GET',
			isArray: true
		}
	});
});