'use strict'

const mongoose = require('mongoose')

const Cocktail = mongoose.model('cocktail', {
	cocktail: String,
	ingredients: [{
		ingredient: String,
		measurement1: Number,
		measurement2: Number,
		specs: String
	}],
	glass: String,
	recipe: String
})

// const User = mongoose.model('user', {
// 	email: String,
// 	password: String
// })

module.exports = { Cocktail }
