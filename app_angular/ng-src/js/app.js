angular.module("CustomDirective", [])
.directive("myAutocomplete",function(){
	function link(scope, element, attrs){
		$(element).autocomplete({
			source:scope[attrs.myAutocomplete],
			// Al seleccionar alguno de los items del autocompletar
			select: function(ev,ui){
				ev.preventDefault();
				if(ui.item){
					scope.optionSelected(ui.item.value);
				}
			},
			//Se llena el combo con la información relacionada con lo expuesto en la caja de texto....
			focus: function (ev,ui){
				ev.preventDefault();
				$(this).val(ui.item.label);
			}
		});
	};
	return {
		link: link
	};
})

//Para poder utilizar la configuración de la imagen en varias ocasiones... 
.directive('backImg',function(){
	return function(scope,element,attrs){
		attrs.$observe('backImg', function(value){
			element.css({
				"background": "url("+value+")",
				"background-size": "cover",
				"background-position":"center"
			});
		});
	}
})

//Controlador principal del cuerpo HTML....
.controller("AppCtrl", function($scope,$http){
	$scope.repos = [];
	$http.get("https://api.github.com/users/twitter/repos")
	.success(function(data){
		$scope.posts =  data;
		for(var i = data.length-1; i>= 0; i--){
			var repo = data[i];
			$scope.repos.push(repo.name);
		}
	})
	.error(function(err){
		console.log(err);
	});

	$scope.optionSelected = function (data){
		$scope.$apply(function(){
			$scope.main_repo = data;
		});
	}
});