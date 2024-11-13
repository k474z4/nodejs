// Callbacks
// const getPokemonById = (id, callback) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;


//     fetch(url).then((response) => {
//         response.json().then((pokemon) => {
//             // console.log(pokemon.name);

//             callback(pokemon.name);
//         })

//     });

// }

// ---------------------------------------------------------------------------------------

//Promesas en cadena
// const getPokemonById = (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     return fetch(url)
//         .then((res) => res.json())
//         // .then(() => { throw new Error('Pokemon no existe') })
//         .then((pokemon) => pokemon.name);

// }


// --------------------------------------------------------------------------------------

// Async - Await
// const getPokemonById = async (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     const res = await fetch(url);
//     const pokemon = await res.json();

//     return pokemon.name;


// }


// --------------------------------------------------------------------------------------

// Async - Await + plugin http modular
// const { http } = require("../plugins");

// const getPokemonById = async (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     const pokemon = await http.get(url);

//     return pokemon.name;

// }

// --------------------------------------------------------------------------------------

// Axios exercise (mi solucion)
// const axios = require('axios')

// const getPokemonById = async (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     const pokemon = await axios.get(url);

//     return pokemon.data.name;

// }

// Axios exercise (solucion de la clase)
const { httpAxios } = require('../plugins/http-client.plugin');

export const getPokemonById = async (id: string | number): Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await httpAxios.get(url);
    return pokemon.name;

}