trig.factory("CalculatorFactory", function(){
	return {
		hyp: function(sideA, sideB){
			var start = (sideA * sideA) + (sideB * sideB);
			return (Math.sqrt(start)).toFixed(2)
		},
		radi: function(radi){
			return (2 * Math.PI * radi).toFixed(2)
		},
		rom: function(sideAA, sideBB){
			return 
		}
	}
})
