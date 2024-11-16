import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

console.log(yarg);

/***********************************************************************************/
//Ejercicio utilizar los valores que vienen de los argumentos mediante la consola, base, limit y show.
/***********************************************************************************/

// MI SOLUCION

// let outputMessage = '';
// const base = yarg.b;
// const show = yarg.s;
// const limit = yarg.l;
// const headerMessage = `
// =========================================
//             Tabla del ${base}                          
// =========================================\n
// `

// for (let i = 1; i <= limit; i++) {
//     outputMessage += `${base} x ${i} = ${base * i}\n`;
// }

// outputMessage = headerMessage + outputMessage;

// if (show) console.log(outputMessage);

// const outputPath = `outputs`;

// fs.mkdirSync(outputPath, { recursive: true });
// fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);

//---------------------------------------------------------------------------------------

// Solucion de la clase

const { b: base, l: limit, s: showTable } = yarg;
let outputMessage = '';
const headerMessage = `
=========================================
            Tabla del ${base}                          
=========================================\n
`

for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (showTable) {
    console.log(outputMessage)
};

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);