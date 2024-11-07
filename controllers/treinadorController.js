// controllers/treinadorController.js
const treinadorModel = require('../models/treinadorModel');
const pokemonModel = require('../models/pokemonModel');

const getCreateTreinadorForm = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('criarTreinador', { pokemons });
};

const createTreinador = (req, res) => {
    const { nome, pokemonIds } = req.body;

    
    const pokemons = pokemonIds.map(id => pokemonModel.getPokemonById(id));
    treinadorModel.createTreinador(nome, pokemons);
    res.redirect('/treinadores');
};

const getAllTreinadores = (req, res) => {
    const treinadores = treinadorModel.getTreinadores();
    res.render('treinadores', { treinadores });
};

module.exports = { getCreateTreinadorForm, createTreinador, getAllTreinadores };
