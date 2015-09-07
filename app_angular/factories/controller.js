//Creación de módulo
angular.module("todoList",["LocalStorageModule"])
	.factory('todoService', function(localStorageService){
		var todoService = {};

		todoService.key = "angular-todo-list";
		//-- Para inicializar arreglo de actividades...
		if(localStorageService.get(todoService.key)){
			todoService.activities = localStorageService.get(todoService.key);
		}else{
			todoService.activities = [];
		}
		//----------------------------------------------------------------
		
		todoService.add = function(newActv){
			todoService.activities.push(newActv);
			todoService.updateLocalStorage();
		};
		
		todoService.updateLocalStorage = function(){
			localStorageService.set(todoService.key,todoService.activities);
		};

		todoService.clean = function(){
			todoService.activities = [];
			todoService.updateLocalStorage();
			return todoService.getAll();
		};

		todoService.getAll = function(){
			return todoService.activities;
		};

		todoService.removeItem = function(item){
			//--Itero sobre todos los elementyos del arreglo json
			todoService.activities = todoService.activities.filter(function(activity){
				return activity !== item;
			});
			todoService.updateLocalStorage();
			return todoService.getAll();
		}

		return todoService;
	})
	.controller("todoController",function($scope, todoService){
				
		$scope.todo = todoService.getAll();
		$scope.newActv = {}
		$scope.addActv = function(){
			todoService.add($scope.newActv);
			$scope.newActv = {};
			//localStorageService.set("angular-todo-list",$scope.todo);
		}

		$scope.removeActv = function(item){
			$scope.todo = todoService.removeItem(item);
		}

		$scope.clean = function(){
			todoService.clean();
		}
	});