"use strict";
// Callbacks
// const getPokemonById = (id, callback) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
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
const http_client_plugin_1 = require("../plugins/http-client.plugin");
const getPokemonById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = yield http_client_plugin_1.httpAxios.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw `Pokemon not found with id ${id}`;
    }
});
exports.getPokemonById = getPokemonById;
