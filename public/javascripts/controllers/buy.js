(function(){

angular.module("seatSwap")
	.controller("BuySeatsController", ['$scope','$location','SeatsService',function($scope,$location,SeatsService) {
		$scope.firstClass = SeatsService.getSeats("firstClass");
		$scope.business = SeatsService.getSeats("business");
		$scope.economy = SeatsService.getSeats("economy");

		$scope.points = 12500;

		$scope.selectedNode = {};
        
        $scope.nodeSelected = function(node) {
            console.log('user selected ' + node.displayName);
            $scope.selectedNode = node;
        };

        $scope.purchase = function(){
        	$scope.selectedNode.checked = false;
        	$scope.selectedNode.selected = true;
        	SeatsService.paymentAmount = $scope.selectedNode.price;
            SeatsService.selecteNodes=[$scope.selectedNode];
        	$location.path('/checkout')
        }

	}]);

})();