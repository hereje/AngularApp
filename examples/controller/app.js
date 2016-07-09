/*Inline array annotation*/

/*
angular.module('app',[]);
angular.module('app')
//Tip: Keep the annotation array in sync with function parameters 
.controller('HelloController',['$scope',function($scope){
	$scope.name ="stranger";
	$scope.welcomeText="Welcome to Angular Js";
	this.welcomeText="Another welcome text";
}]);
*/


/* implicit annotation */
//The easiest way of annotate your dependencies, it's useless for minification
//Module definition and dependency injection
angular.module('app',[]);  //  var app =  angular.module('app',[]);

//Module is already defined so, we can declare a controller.
//Defining a controller
angular.module('app')
.controller('HelloController',function($scope){
	//$scope is data used to render the view.
	$scope.name ="stranger";
	$scope.welcomeText="Welcome to Angular Js";
	this.welcomeText="Another welcome text"; //this property lives in this controller
});


/* $inject property annotation */

/*
//Tip: Keep the annotation array in sync with function parameters 
var app = angular.module('app',[]);
var HelloController =function($scope){
	$scope.name ="stranger";
	$scope.welcomeText="Welcome to Angular Js";
	this.welcomeText="Another welcome text";
}
HelloController.$inject = ['$scope'];
app.controller('HelloController', HelloController);
*/