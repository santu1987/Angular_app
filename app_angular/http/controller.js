//--Creación del primer módulo....
angular.module("MyFirstApp",[])
	.controller("FirstController",function($scope,$http){
	$scope.posts = [];
	$scope.newPost = {};
	$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			$scope.posts = data;
		})
		.error(function(er){
			console.log(er);
		});
	$scope.addPost = function(){
		$http.post("http://jsonplaceholder.typicode.com/posts",{
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			userId:1
		})
			.success(function(data,status,headers,config){
				//$scope.posts.push($scope.newPost);
				//--Otra forma de hacer lo mismo...
				$scope.posts.push(data);
				$scope.newPost = {};

			})
			.error(function(err,status,headers,config){
				console.log(errr);
			});
	}	
});
