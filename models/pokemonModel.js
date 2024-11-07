const pokemons = [
    { id: 1, nome: 'Bulbassauro', tipo: 'Vegetal/Veneno'},
    { id: 2, nome: 'Squirtle', tipo: 'Água'},
    { id: 3, nome: 'Charmander', tipo: 'Fogo'},
];

let pokemonsarray = []; // array para armazenar Pokémons

const getPokemons = () => pokemons;

const getPokemonById = (id) => pokemons.find(pokemon => pokemon.id === parseInt(id));

const createPokemon = (nome, tipo) => {
    const id = pokemons.length + 1;
    pokemons.push({ id, nome, tipo });
};

module.exports = { getPokemons, getPokemonById, createPokemon };