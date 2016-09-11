(function(){

angular.module("seatSwap")
	.controller("BuySeatsController", ['$scope','SeatsService',function($scope,SeatsService) {
		$scope.firstClass = SeatsService.getSeats("firstClass");
		$scope.business = SeatsService.getSeats("business");
		$scope.economy = SeatsService.getSeats("economy");

		$scope.points = 12500;

		$scope.selectedNode = {};
        
        $scope.nodeSelected = function(node) {
            console.log('user selected ' + node.displayName);
            $scope.selectedNode = node;
        };

	}]);

})();