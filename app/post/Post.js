angular.module('application').factory('Post', function($resource) {
	return $resource('http://jsonplaceholder.typicode.com/posts/:id',{},{
		query: {
			method: 'GET',
			isArray: true
		}
	});
});