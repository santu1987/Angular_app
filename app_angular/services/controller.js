//Creación de módulo
angular.module("todoList",["LocalStorageModule"])
//--Esta función se ejecuta un cosntructor....
	.service('todoService', function(localStorageService){
		this.key = "angular-todo-list";
		//-- Para inicializar arreglo de actividades...
		if(localStorageService.get(this.key)){
			this.activities = localStorageService.get(this.key);
		}else{
			this.activities = [];
		}
		//----------------------------------------------------------------
		
		this.add = function(newActv){
			this.activities.push(newActv);
			this.updateLocalStorage();
		};
		
		this.updateLocalStorage = function(){
			localStorageService.set(this.key,this.activities);
		};

		this.clean = function(){
			this.activities = [];
			this.updateLocalStorage();
			return this.getAll();
		};

		this.getAll = function(){
			return this.activities;
		};

		this.removeItem = function(item){
			//--Itero sobre todos los elementyos del arreglo json
			this.activities = this.activities.filter(function(activity){
				return activity !== item;
			});
			this.updateLocalStorage();
			return this.getAll();
		}
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