app.factory('CocktailFactory', function($http) {


	return {
		add: function(newCocktail) {
			console.log(newCocktail)
			return new Promise((resolve, reject) => {
				$http.post(`http://localhost:3000/cocktails`, newCocktail)
					.then((data) => {
						console.log(data)
						resolve(data)
					})
			})
		},

		getAll: function() {
			return new Promise((resolve, reject) => {
				$http.get(`http://localhost:3000/cocktails`)
				.then((data) => {
					resolve(data.data)
				})
			})
		}

	}




})


