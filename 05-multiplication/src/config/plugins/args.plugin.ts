import yargs from "yargs";
import { hideBin } from 'yargs/helpers';

// Sintaxis de objetos
export const yarg = yargs(process.argv)
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true, // obliga a proporcionar este argumento | arroja exeption y finaliza la ejecucion
        describe: 'Multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    // Para verificar los argumentos tenemos que proporcionar 2 parametros
    .check((argv, options) => {

        if (argv.b < 1) throw 'Error: base must be greater than 0';

        return true;
    })
    .parseSync()