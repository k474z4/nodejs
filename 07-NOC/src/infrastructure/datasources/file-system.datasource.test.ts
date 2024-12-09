import fs from 'fs';
import path from 'path';
import { FileSystemDatasource } from './file-system.datasource';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';


describe('FyleSystemDatasource', () => {

    const logPath = path.join(__dirname, '../../../logs').replace(/\\/g, '/');


    beforeEach(() => {
        fs.rmSync(logPath, { recursive: true, force: true });
    })

    test('should create log files if they do not exists', () => {

        new FileSystemDatasource();
        const files = fs.readdirSync(logPath);

        expect(files).toEqual(['logs-all.log', 'logs-high.log', 'logs-medium.log']);

    })


    test('should save a log in logs-all.log', () => {

        const LogDatasource = new FileSystemDatasource();
        const log = new LogEntity({
            message: 'test',
            level: LogSeverityLevel.low,
            origin: 'file-system.datasource.test.ts'
        });

        LogDatasource.saveLog(log);
        const allLogs = fs.readFileSync(`${logPath}/logs-all.log`, 'utf-8');
        expect(allLogs).toContain(JSON.stringify(log));

    });


    test('should save a log in logs-all.log and logs-medium.log', () => {

        const LogDatasource = new FileSystemDatasource();
        const log = new LogEntity({
            message: 'test',
            level: LogSeverityLevel.medium,
            origin: 'file-system.datasource.test.ts'
        });

        LogDatasource.saveLog(log);
        const allLogs = fs.readFileSync(`${logPath}/logs-all.log`, 'utf-8');
        const mediumLogs = fs.readFileSync(`${logPath}/logs-medium.log`, 'utf-8');
        expect(allLogs).toContain(JSON.stringify(log));
        expect(mediumLogs).toContain(JSON.stringify(log));

    });


    test('should save a log in logs-all.log and logs-high.log', () => {

        const LogDatasource = new FileSystemDatasource();
        const log = new LogEntity({
            message: 'test',
            level: LogSeverityLevel.high,
            origin: 'file-system.datasource.test.ts'
        });

        LogDatasource.saveLog(log);
        const allLogs = fs.readFileSync(`${logPath}/logs-all.log`, 'utf-8');
        const highLogs = fs.readFileSync(`${logPath}/logs-high.log`, 'utf-8');
        expect(allLogs).toContain(JSON.stringify(log));
        expect(highLogs).toContain(JSON.stringify(log));

    });


    test('should return all logs', async () => {

        const logDatasource = new FileSystemDatasource();
        const logLow = new LogEntity({
            message: 'log-low',
            level: LogSeverityLevel.low,
            origin: 'low'
        });
        const logMedium = new LogEntity({
            message: 'log-medium',
            level: LogSeverityLevel.medium,
            origin: 'medium'
        });
        const logHigh = new LogEntity({
            message: 'log-high',
            level: LogSeverityLevel.high,
            origin: 'high'
        });

        await logDatasource.saveLog(logLow);
        await logDatasource.saveLog(logMedium);
        await logDatasource.saveLog(logHigh);

        const logsLow = await logDatasource.getlogs(LogSeverityLevel.low);
        const logsMedium = await logDatasource.getlogs(LogSeverityLevel.medium);
        const logsHigh = await logDatasource.getlogs(LogSeverityLevel.high);

        expect(logsLow).toEqual(expect.arrayContaining([logLow, logMedium, logHigh]));
        expect(logsMedium).toEqual(expect.arrayContaining([logMedium]));
        expect(logsHigh).toEqual(expect.arrayContaining([logHigh]));

    });


})