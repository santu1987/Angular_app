//--Creación del primer módulo....
angular.module("MyFirstApp",[])
	.controller("FirstController",function($scope){
	$scope.nombre = "Gianni Santucci";
	$scope.nuevoComentario = { };
	$scope.comentarios = [
		{
			comentario:"Aprendiendo angular JS",
			username:"Gsantucci"
		},
		{
			comentario:"Aprenderé angular JS, claro que sí",
			username:"otro usuario"
		}
	];
	//--Creo un metodo
	$scope.agregarComentario =  function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {}		
	}
});
