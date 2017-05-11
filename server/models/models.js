'use strict'

const mongoose = require('mongoose')

const Dog = mongoose.model('dog', {
	name: String,
	owner: String,
	breed: String,
	age: Number,
	weight: Number
})

// const User = mongoose.model('user', {
// 	email: String,
// 	password: String
// })

module.exports = { Dog }
