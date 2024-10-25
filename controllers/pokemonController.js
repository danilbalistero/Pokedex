const pokemonModel = require('../models/pokemonModel');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('index', { pokemons });
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if (pokemon) {
        res.render('pokemon', { pokemon });
    } else {
        res.status(404).send('Pokemon não encontrado');
    }
};

const getCreatePokemonForm = (req, res) => {
    res.render('criarPokemon');
};

const createPokemon = (req, res) => {
    const { nome, tipo } = req.body;
    pokemonModel.createPokemon(nome, tipo);  // Chamando o método no modelo
    res.redirect('/');  // Redireciona para a página inicial após o cadastro
};

module.exports = { getAllPokemons, getPokemon, getCreatePokemonForm, createPokemon };
