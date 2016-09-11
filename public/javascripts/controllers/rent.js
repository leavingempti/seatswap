(function(){

angular.module("seatSwap")
	.controller("RentSeatsController", ['$scope','SeatsService',function($scope,SeatsService) {
		$scope.seatsData = SeatsService.seats;
		$scope.points = 13500;
	}]);
	
})();