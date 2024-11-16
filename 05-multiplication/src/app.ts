import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv);

// console.log(yarg);

// Funcion anonima autoinvocada asincrona xD
(async () => {
    await main();
})();

async function main() {

    const { b: base, l: limit, s: showTable } = yarg;

    ServerApp.run({ base, limit, showTable });
}