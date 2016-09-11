(function(){

var app = angular.module("seatSwap", ['ngRoute'])
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	      .when('/',{
	          templateUrl: '/javascripts/views/buy.tpl.html',
	          controller: 'BuySeatsController'
	      })
	      .when('/rent',{
	          templateUrl: '/javascripts/views/rent.tpl.html',
	          controller: 'RentSeatsController'
	      })
	      .otherwise({ 
	        redirectTo: '/'
	      });
}]);
	
})();