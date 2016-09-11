(function(){

	angular.module('seatSwap').directive('seatPicker', [function(){
		return {
			restrict: 'E',
	        template: `
	        	<div class="row center-inner">
		        	<ul ng-repeat="seat in seats.rows" class="col-md-12 btn-group">
		        		<li 
		        			ng-repeat="node in seat.nodes" 
		        			class="btn btn-default seat" 
		        			ng-click="node.type==1&&node.selected!=1&&selectNode(node)"
		        			ng-class="{'btn-danger':node.selected==1&&node.type==1,
		        						'disabled':node.selected,
		        						'btn-success':node.checked,
		        						'seatGaps':node.type==0
		        			}">
		        				{{node.type==1?node.displayName:''}}
		        		</li>
		        	</ul>
	        	</div>
	        `,
	        scope: {
	            seats: '=',
	            onSelecting: '&'
	        },
	        link: function (scope, element, attrs) {
	        	console.log(scope.seats);
	        	scope.selectNode = function(node){
	        		console.log(node)
	        		node.checked = !node.checked;
	        		scope.onSelecting({'node':node});
	        	}
	        }
		}
	}]);

})()