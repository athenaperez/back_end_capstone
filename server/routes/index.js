const { Router } = require('express')
const router = Router();
const { getCocktails, addCocktail, singleCocktail } = require('../controllers/index.js')

// public routes
// define routes for getting all cocktails and a single cocktail
router.post('/cocktails', addCocktail);
router.get('/cocktails', getCocktails);
router.get('/cocktails/:id', singleCocktail);


module.exports = router;
