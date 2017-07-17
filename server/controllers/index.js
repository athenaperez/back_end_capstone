'use strict'

const mongoose = require('mongoose')
const { Cocktail } = require('../models/models.js')


// __________________________
const addCocktail = (req, res, err) => {
	Cocktail
	.create(req.body)
  .then((cocktail) => {
 		// console.log('inside addCocktail controller')
    res.send("done")
  })
  .catch(err)
}
// __________________________


// __________________________
const getCocktails = (req, res, err) => {
	Cocktail
	.find()
	.then((cocktail) => {
		res.json(cocktail)
	})
  .catch(err)
}
// __________________________



// __________________________
const singleCocktail = (req, res, err) => {
	let id = req.params.id
	Cocktail
	.findById( id )
	.then((data) => {
		res.json(data)
	})

  .catch(err)
}
// __________________________

module.exports = { addCocktail, getCocktails, singleCocktail }


