import { characters } from "../../src/js-foundation/02-destructuring";

describe('js-foundation/02-destructuring', () => {

    test('characters should contain Flash, Superman', () => {

        // Segun el contenido
        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');
    })

    test('first character should be Flash, and second Superman', () => {

        // Segun el orden
        const [flash, superman] = characters;

        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman');

    })

})