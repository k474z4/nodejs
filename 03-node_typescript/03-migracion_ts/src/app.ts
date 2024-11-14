// npm start
// console.log('El comando start es el que levanta la aplicacion en produccion');


//----------------------------------------------------------------------------------------

// Para usar alguna funcionalidad que se encuentre en otro archivo es necesario importarlo
// const emailTemplateImport = require('./js-foundation/01-template');


// Si usamos la desestructuracion ya no es necesario utilizar la sintaxis de puntos para referir a una parte especifica del objeto
// const { emailTemplate } = require('./js-foundation/01-template.js');


// Podemos especificar que parte del codigo queremos ejecutar 
// console.log(emailTemplateImport.emailTemplate);

// Aca usamos directamente el resultado de la desestructuracion para ejecutar ese trozo de codigo
// console.log(emailTemplate);

//----------------------------------------------------------------------------------------

// require('./js-foundation/02-destructuring.js');

//----------------------------------------------------------------------------------------

// import { getUserById } from "./js-foundation/03-callbacks";

// const id = 2;

// getUserById(id, function (error, user) {
//     if (error) {
//         throw new Error(error)
//     }

//     console.log({ user });
// });

//----------------------------------------------------------------------------------------

import { getUserById } from "./js-foundation/04-arrow.js.js";

const id = 2;

getUserById(id, (error, user) => {
    if (error) {
        throw new Error(error)
    }

    console.log({ user });
});

//----------------------------------------------------------------------------------------

import { buildMakePerson } from "./js-foundation/05-factory.js";
import { getAge, getUUID } from "./plugins/index.js";

// Inyeccion de dependencias
const makePerson = buildMakePerson({ getUUID, getAge });

const obj = { name: 'John', birthdate: '1996-07-18' };

const john = makePerson(obj);

console.log({ john });

//----------------------------------------------------------------------------------------

import { getPokemonById } from "./js-foundation/06-promises.js";


getPokemonById(4)
    .then((pokemon) => console.log({ pokemon }))
    .catch((err) => console.error('Por favor intente denuevo'))
    .finally(() => console.log('Finalmente'));

//----------------------------------------------------------------------------------------

import { buildLogger } from "./plugins/logger.plugin.js";

const logger = buildLogger('app.js');

logger.log('Hola mundo');
logger.error('Un error muy malo');

console.log('Hola Mundo')