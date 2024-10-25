const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');


router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);
router.get('/pokemons/new', pokemonController.getCreatePokemonForm);
router.post('/pokemons', pokemonController.createPokemon);

module.exports = router;