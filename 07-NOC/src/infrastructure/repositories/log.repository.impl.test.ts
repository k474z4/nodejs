import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepositoryImpl } from "./log.repository.impl"



describe('LogRepositoryImpl', () => {

    const mockLogDatasource = {
        saveLog: jest.fn(),
        getlogs: jest.fn(),
    }

    const logRepository = new LogRepositoryImpl(mockLogDatasource);

    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('saveLog should call the datasource with arguments', async () => {

        const log = { level: LogSeverityLevel.high, message: 'lalala' } as LogEntity;
        await logRepository.saveLog(log);

        expect(mockLogDatasource.saveLog).toHaveBeenCalledWith(log);


    })


    test('getlogs should call the datasource with arguments', async () => {

        const lowSeverity = LogSeverityLevel.low;

        await logRepository.getlogs(lowSeverity);

        expect(mockLogDatasource.getlogs).toHaveBeenCalledWith(lowSeverity);

    })


})