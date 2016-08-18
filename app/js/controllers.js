trig.controller("TrigController", function($scope, CalculatorFactory){
	$scope.sideA;
	$scope.sideB;
	$scope.shape;
	$scope.half;
	$scope.calculate = function(){
		$scope.hypotenuse = CalculatorFactory.hyp($scope.sideA, $scope.sideB)
	};
	$scope.calculate2 = function(){
		$scope.area = CalculatorFactory.radi($scope.half)
	};

});
