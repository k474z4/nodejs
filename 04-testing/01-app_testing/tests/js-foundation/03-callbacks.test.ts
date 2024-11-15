import { error } from "console";
import { getUserById } from "../../src/js-foundation/03-callbacks";


describe('js-foundation/03-callbacks', () => {

    test('getUserById should return an error if user does not exist', (done) => {

        const id = 10;
        getUserById(id, (err, user) => {

            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();

            done();
        });

    });

    // Ejercicio: si indicamos id = 1 el test deberia devolver John Doe
    test('getUserById should return user if id exists', (done) => {

        const id = 1;
        getUserById(id, (err, user) => {

            expect(err).toBeUndefined();

            // Mi solucion
            expect(user?.name).toBe('John Doe');

            // Solucion de la clase
            expect(user).toEqual({
                id: 1,
                name: 'John Doe',
            });

            done();

        });

    });

});