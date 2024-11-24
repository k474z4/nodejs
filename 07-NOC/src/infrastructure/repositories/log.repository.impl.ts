import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository"



export class LogRepositoryImpl implements LogRepository {

    // Recibe cualquier datasource - Mongo,SQL, Oracle, etc.
    constructor(
        private readonly logDatasource: LogDatasource,
    ) { }


    async saveLog(log: LogEntity): Promise<void> {
        return this.logDatasource.saveLog(log);
    }

    async getlogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDatasource.getlogs(severityLevel);
    }


}
