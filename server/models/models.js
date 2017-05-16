'use strict'

const mongoose = require('mongoose')

const Cocktail = mongoose.model('cocktail', {
	cocktail: String,
	ingredients: [{
		ingredient: String,
		measurement: Number,
		Spec: String
	}],
	glass: String,
	directions: String
})

// const User = mongoose.model('user', {
// 	email: String,
// 	password: String
// })

module.exports = { Cocktail }
