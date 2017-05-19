const app = angular.module('CraftingCocktails', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl'
	}).when('/search', {
		templateUrl: 'partials/searchDisplay.html',
		controller: 'SearchCtrl'
	})



// materialize drop down selects
  $(document).ready(function() {
    $('select').material_select();
  });

}])
