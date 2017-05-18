app.controller('SearchCtrl', function($scope, CocktailFactory) {


	CocktailFactory.getAll()
		.then((data) => {
			$scope.cocktails = data
			console.log($scope.cocktails)
			$scope.$apply()
		})

})
