angular.module("FinalApp")
	.controller("MainController",function($scope,$resource,PostResource){
		//se modifica para poder colocar que pueda modificar...
		//Post = $resource("http://jsonplaceholder.typicode.com/posts/:id",{id:"@id"},{update:{method:"PUT"}});
		User = $resource("http://jsonplaceholder.typicode.com/users/:id",{id:"@id"});
		$scope.posts = PostResource.query();
		$scope.users = User.query();
		//query() Get /posts ->arreglo de post ->isArray: true
		//--Cuando viene por ng-clik debe realizarse la función dentro del mainController
		$scope.removePost = function(post){
			PostResource.delete({id: post.id}, function(data){
				console.log(data);
			});
			$scope.posts = $scope.posts.filter(function(element){
				return element.id !== post.id;
			});
		}
	})
	//--Con .get devuelve un solo registro....--//
	.controller("PostController", function($scope,PostResource, $routeParams, $location){
		//-- Cuando viene por un <a>
		//Post = $resource("http://jsonplaceholder.typicode.com/posts/:id",{id:"@id"});
		$scope.post = PostResource.get({id: $routeParams.id});
		$scope.title = "Editar Post";
		$scope.savePost = function(){
			PostResource.update({id: $scope.post.id},{data: $scope.post},function(data){
				console.log(data);
				$location.path("/post/"+$scope.post.id);
			});
		}
	})

	//--
	.controller ("NewPostController", function($scope,PostResource,$location){
		//Post = $resource("http://jsonplaceholder.typicode.com/posts/:id",{id:"@id"});
		$scope.post = {};
		$scope.title = "Crear Post.";
		$scope.savePost = function(){
			PostResource.save({data: $scope.post},function(data){
				console.log(data);
				$location.path("/");
			});
		}
	});