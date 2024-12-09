import { LogEntity, LogSeverityLevel } from "./log.entity"



describe('LogEntity', () => {


    const dataObject = {
        message: 'lalala',
        level: LogSeverityLevel.high,
        origin: 'log.entity.test.ts'
    }

    test('should create a LogEntity instance', () => {

        const log = new LogEntity(dataObject);

        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe(dataObject.message);
        expect(log.level).toBe(dataObject.level);
        expect(log.origin).toBe(dataObject.origin);
        expect(log.createdAt).toBeInstanceOf(Date);

    });


    test('should create a LogEntity instance from Json', () => {

        const json = `{"message":"Service https://google.com working","level":"low","createdAt":"2024-12-06T07:59:25.390Z","origin":"check-service.ts"}`

        const log = LogEntity.fromJson(json);

        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe("Service https://google.com working");
        expect(log.level).toBe(LogSeverityLevel.low);
        expect(log.origin).toBe("check-service.ts");
        expect(log.createdAt).toBeInstanceOf(Date);

    });

    test('should create a LogEntity instance from object', () => {

        const log = LogEntity.fromObject(dataObject);

        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe(dataObject.message);
        expect(log.level).toBe(dataObject.level);
        expect(log.origin).toBe(dataObject.origin);
        expect(log.createdAt).toBeInstanceOf(Date);

    })


})