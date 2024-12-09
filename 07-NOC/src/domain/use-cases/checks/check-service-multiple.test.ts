import { LogEntity } from "../../entities/log.entity";
import { CheckServiceMultiple } from "./check-service-multiple"



describe('CheckService useCase', () => {

    const mockRepository1 = {
        saveLog: jest.fn(),
        getlogs: jest.fn(),
    }

    const mockRepository2 = {
        saveLog: jest.fn(),
        getlogs: jest.fn(),
    }

    const mockRepository3 = {
        saveLog: jest.fn(),
        getlogs: jest.fn(),
    }


    const succesCallback = jest.fn();
    const errorCallback = jest.fn();

    const checkService = new CheckServiceMultiple(
        [mockRepository1, mockRepository2, mockRepository3],
        succesCallback,
        errorCallback
    );

    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('should call succesCallback when fetch returns true', async () => {

        const wasOk = await checkService.execute('https://google.com')

        expect(wasOk).toBe(true)
        expect(succesCallback).toHaveBeenCalled();
        expect(errorCallback).not.toHaveBeenCalled();

        expect(mockRepository1.saveLog).toHaveBeenCalledWith(
            expect.any(LogEntity)
        )
        expect(mockRepository2.saveLog).toHaveBeenCalledWith(
            expect.any(LogEntity)
        )
        expect(mockRepository3.saveLog).toHaveBeenCalledWith(
            expect.any(LogEntity)
        )

    });


    test('should call errorCallback when fetch returns false', async () => {

        const wasOk = await checkService.execute('https://lalala.com')

        expect(wasOk).toBe(false)
        expect(succesCallback).not.toHaveBeenCalled();
        expect(errorCallback).toHaveBeenCalled();

        expect(mockRepository1.saveLog).toHaveBeenCalledWith(
            expect.any(LogEntity)
        )
        expect(mockRepository2.saveLog).toHaveBeenCalledWith(
            expect.any(LogEntity)
        )
        expect(mockRepository3.saveLog).toHaveBeenCalledWith(
            expect.any(LogEntity)
        )

    });


});