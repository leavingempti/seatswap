(function(){

var generateRow = function(rowConfig){
	var rows = [];
	for(var rowIndex in rowConfig.names){
		var rowName = rowConfig.names[rowIndex];
		rows.push({
			"rowname":rowName,
			"nodes":generateNodes(rowName,rowConfig)
		})
	}
	return rows;
}
var generateNodes = function(rowName,rowConfig){
	var nodes = [];
	var seatIndex = 1;
	for(var index = 1 ; index < rowConfig.perRow;index++)
	{
		var seatData = {
			'type':rowConfig.seatConfig.indexOf(index)!=-1?0:1,  // to add space set value 0
			'displayName':rowName+seatIndex,
			'price':rowConfig.price,
			'selected':parseInt(Math.random(2)*10)%2,
			'checked':false
		};
		if(rowConfig.seatConfig.indexOf(index)==-1){
			seatIndex++;
		}
		nodes.push(seatData)
	}
	return nodes;
}
angular.module("seatSwap")
	.service('SeatsService',[function(){
		this.seats = {};
		this.paymentAmount = 0;
		this.selecteNodes = [];
		var rowConfig = {
			"firstClass":{
				'names':["A","B","C"],
				'seatConfig':[2],
				'perRow':4,
				'price':300
			},
			"business":{
				'names':["D","E","F","G"],
				'perRow':6,
				'seatConfig':[2,4],
				'price':150
			},
			"economy":{
				'names':["H","I","J","K","L","M","N"],
				'perRow':8,
				'seatConfig':[2,6],
				'price':50
			}
		};
		this.getSeats = function(type){
			if(angular.isDefined(rowConfig[type])) {
				if(!angular.isDefined(this.seats[type]))
				{
					this.seats[type] =	{
						'rows':generateRow(rowConfig[type]),
						'config':rowConfig[type]
					}
				}
				return this.seats[type];
			}
			else
			{
				return { 
					'row':[]
				}
			}
		}
		this.getSelectedSeats = function(){
			var seatNames = [];
			angular.forEach(this.selecteNodes,function(node){
				seatNames.push(node.displayName);
			})
			return seatNames.toString();
		}
	}])
})();