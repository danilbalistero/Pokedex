let treinadores = []; 

const createTreinador = (nome, pokemons) => {
    const id = treinadores.length + 1;
    treinadores.push({ id, nome, pokemons });
    return id;
};

const getTreinadores = () => treinadores;

module.exports = { createTreinador, getTreinadores };
