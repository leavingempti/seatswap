(function(){

angular.module("seatSwap")
	.controller("BuySeatsController", ['$scope','SeatsService',function($scope,SeatsService) {
		$scope.seatsData = SeatsService.seats;
		$scope.points = 12500;

		$scope.selectedNodes = [];
        
        $scope.userEvent = '--';
        
        $scope.nodeSelected = function(node) {
            $scope.userEvent = 'user selected ' + node.displayName;
            $scope.$apply(); 
            
            console.log('User selected ' + node.displayName); 
        };
        
        $scope.nodeDeselected = function(node) {
            $scope.userEvent = 'user deselected ' + node.displayName;
            $scope.$apply(); 
            
            console.log($scope.userEvent = 'User deselected ' + node.displayName);
        };
        
        $scope.nodeDisallowedSelected = function(node) {
            $scope.userEvent = 'user attempted to select occupied seat ' + node.displayName;
            $scope.$apply(); 
            
            console.log('User attempted to select occupied seat : ' + node.displayName);
        };
        
	}]);

})();