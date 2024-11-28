import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";

// Podemos tener muchas instancias que trabajajen de la misma forma con destinos diferentes
const fileSystemLogRepository = new LogRepositoryImpl(
    // new postgreDS()
    // new mongoDS()
    new FileSystemDatasource()
);



export class Server {

    public static start() {

        console.log('Server started...');

        // Enviar email

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'http://localhost:3000';
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${url} is ok`),
        //             (error) => console.log(error),
        //         ).execute(url);
        //         // new CheckService().execute('http://localhost:3000/');
        //     }
        // );

    }
}

