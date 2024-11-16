import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv);

// console.log(yarg);

// Funcion anonima autoinvocada asincrona xD
(async () => {
    await main();
})();


async function main() {

    // La dependencia de yarg solo esta presente en este lugar para luego pasar como parametros a ServerApp
    const { b: base, l: limit, s: showTable, n: name, d: destination } = yarg;

    ServerApp.run({ base, limit, showTable, name, destination });
}