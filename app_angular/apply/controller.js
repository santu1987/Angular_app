angular.module("mainModule",[])
	.controller("FiltersController",function($scope){
		$scope.nombre = "Gianni Santucci";
		/*setTimeout(function(){
			//Se actualiza... con apply que llama al diggest....
			$scope.$apply(function(){
				$scope.nombre = "Prueba";
				console.log($scope.nombre);
			});
		},2000);*/
		document.querySelector("#mi_boton").addEventListener("click",function(){
			$scope.$apply(function(){
				$scope.nombre = "prueba";
				console.log($scope.nombre);
			});	
		});
	});