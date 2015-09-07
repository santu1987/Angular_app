//Creación de módulo
angular.module("todoList",["LocalStorageModule"])
	.controller("todoController",function($scope,localStorageService){
		//$scope.todo = [];
		if(localStorageService.get("angular-todo-list")){
			$scope.todo = localStorageService.get("angular-todo-list");
		}else{
			$scope.todo = [];
		}
		//Creo un guache para no repetir código
		$scope.$watchCollection('todo',function(newValue,oldValue){
			localStorageService.set("angular-todo-list",$scope.todo);
			$scope.newActv = {};
		});
		$scope.addActv = function(){
			$scope.todo.push($scope.newActv);
			//$scope.newActv = {};
			//localStorageService.set("angular-todo-list",$scope.todo);
		}
	});