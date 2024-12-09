import { envs } from "./envs.plugins";



describe('envs.plugin.ts', () => {


    test('should return env options', () => {

        expect(envs).toEqual({
            PORT: 3000,
            MAILER_SERVICE: 'gmail',
            MAILER_EMAIL: 'k474z4.dev@gmail.com',
            MAILER_SECRET_KEY: 'tuwnwpxwkhhckisd',
            PROD: false,
            MONGO_URL: 'mongodb://k474z4:12345678@localhost:27017/',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'k474z4',
            MONGO_PASS: '12345678'
        })

    })

    test('should return error if not found env', async () => {

        jest.resetModules();
        process.env.PORT = 'ABC';

        try {
            await import('./envs.plugins');
            expect(true).toBe(false);

        } catch (error) {
            expect(`${error}`).toContain('"PORT" should be a valid integer');

        }


    })

})