'use strict'

const mongoose = require('mongoose')

const Cocktail = mongoose.model('cocktail', {
	cocktail: String,
	ingredients: [{
		ingredient: String,
		measurement1: String,
		measurement2: String,
		specs: String,
	},
	{
		ingredientB: String,
		measurement1B: String,
		measurement2B: String,
		specsB: String
	}],
	glass: String,
	recipe: String
})

// const User = mongoose.model('user', {
// 	email: String,
// 	password: String
// })

module.exports = { Cocktail }
