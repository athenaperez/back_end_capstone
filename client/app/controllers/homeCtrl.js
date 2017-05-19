app.controller('HomeCtrl', function($scope, CocktailFactory) {

	$scope.addCocktail = () => {
		console.log("clicked button addcocktail", $scope.newCocktail)
		CocktailFactory.add($scope.newCocktail)
		$scope.newCocktail = {}
	}


	// $scope.newIngredient = (newIngredient) => {
	// 	// let newIngredient = {}
	// 	$scope.newCocktail.ingredients.push(newIngredient)
	// 	console.log($scope.newCocktail, "ingredient added")
	// }


	// ___IMGAGE UPLOAD____________________________
	// 	let storageRef = firebase.storage().ref();

	// 	let inputElement = document.getElementById('fileInput');

	// 	inputElement.addEventListener("change", handleFiles, false);

	// 	function handleFiles() {
	// 		console.log("sup handleFiles")
	// 		var fileList = this.files;
	// 			storageRef.child(fileList[0].name).put(fileList[0])
	// 				.then(function(snapshot) {
	// //getting the url
	// 					  storageRef.child(fileList[0].name).getDownloadURL()
	// 					    	.then(function(url) {
	// 					      var img = document.getElementById('upload-placeholder-img');
	// 					      image = url;
	// 					      img.src = url;
	// 					    })
	// 					    .catch(function(error) {
	// 					    })
	// 				});

	// 	}
	// ________END IMAGE UPLOAD AND DISPLAY_______________



});
