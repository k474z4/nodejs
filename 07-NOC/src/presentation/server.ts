import { envs } from "../config/plugins/envs.plugins";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service.";

// Podemos tener muchas instancias que trabajajen de la misma forma con destinos diferentes
const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);

const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource(),
);

const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource(),
);

const emailService = new EmailService();

export class Server {

    public static start() {

        console.log('Server started...');


        // Enviar email
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository,
        // ).execute(
        //     'correo@gmail.com'
        // )

        // emailService.sendEmailWithFileSystemLogs(
        //     []
        // );

        // configurar espacios de tiempo
        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'http://localhost:3000';
                // new CheckService(
                //     logRepository,
                //     () => console.log(`${url} is ok`),
                //     (error) => console.log(error),
                // ).execute(url);
                // new CheckService().execute('http://localhost:3000/');

                new CheckServiceMultiple(
                    [fsLogRepository, mongoLogRepository, postgresLogRepository],
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error),
                ).execute(url);
            }
        );

    }
}

