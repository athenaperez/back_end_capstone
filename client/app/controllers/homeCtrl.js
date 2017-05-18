app.controller('HomeCtrl', function($scope, CocktailFactory) {





	$scope.addCocktail = () => {
		console.log("clicked button addcocktail", $scope.newCocktail)

		CocktailFactory.add($scope.newCocktail)
		$scope.newCocktail = {}
	}





})
