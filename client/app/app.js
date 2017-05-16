const app = angular.module('CraftingCocktails', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl'
	})


}])
