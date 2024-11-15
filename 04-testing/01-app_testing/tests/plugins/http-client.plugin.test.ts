import { httpAxios } from "../../src/plugins/http-client.plugin";

describe('plugins/http-client.plugin', () => {

    test('httpAxios should return a string', async () => {

        const data = await httpAxios.get('https://jsonplaceholder.typicode.com/todos/1')

        expect(data).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: expect.any(Boolean)
        })

    })

    test('httpAxios should have POST, PUT and Delete methods', () => {

        expect(typeof httpAxios.post).toBe('function');
        expect(typeof httpAxios.put).toBe('function');
        expect(typeof httpAxios.delete).toBe('function');
        expect(typeof httpAxios.get).toBe('function');

    })

})