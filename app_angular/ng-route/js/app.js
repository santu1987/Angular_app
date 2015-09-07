//-- Acá si declaro el modulo, por ello ng-Route debe estar en la lista de dependencias....
angular.module("CustomDirective", ["ngRoute"])
//Para determinar las rutas a las que va el sistema...
.config(function($routeProvider){
	$routeProvider
		.when("/",{
			controller: "ReposController",
			templateUrl: "templates/home.html"
		})
		.when("/repo/:name",{
			controller:"RepoController",
			templateUrl:"templates/repo.html"
		})
		//si colocan cualquier cosa direcciona al inicio....
		.otherwise("/");
});