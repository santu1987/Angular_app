angular.module("mainModule",[])
	.run(function($rootScope){
		$rootScope.nombre = "Ejemplo";
	})
	.controller("FiltersController",function($scope){
		$scope.nombre = "Gianni"
		setTimeout(function(){
			$scope.$apply(function(){
				$scope.nombre = ":3";
			});
		},1000);
	})
	.controller("ChildController",function($scope){

	});