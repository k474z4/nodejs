import { envs } from "../config/plugins/envs.plugins";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service.";

// Podemos tener muchas instancias que trabajajen de la misma forma con destinos diferentes
const fileSystemLogRepository = new LogRepositoryImpl(
    // new postgreDS()
    // new mongoDS()
    new FileSystemDatasource()
);



export class Server {

    public static start() {

        console.log('Server started...');

        console.log(envs.MAILER_EMAIL, envs.MAILER_SECRET_KEY)

        // Enviar email
        const emailService = new EmailService();
        emailService.sendEmailWithFileSystemLogs(
            ['fackingclau@gmail.com']
        );

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

