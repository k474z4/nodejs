// const getPokemonById = (id, callback) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     fetch(url).then((response) => {
//         response.json().then((pokemon) => {
//             // console.log(pokemon.name);

//             callback(pokemon.name);
//         })

//     });

// }

//Promesas en cadena
const getPokemonById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return fetch(url)
        .then((res) => res.json())
        // .then(() => { throw new Error('Pokemon no existe') })
        .then((pokemon) => pokemon.name);

}


module.exports = getPokemonById;