// Un factory function es una funcion que regresa otra funcion
// El uso de factory function nos permite crear aplicaciones tolerante a cambios

// const { getAge, getUUID } = require('../plugins')

// const obj = { name: 'John', birthdate: '1996-07-18' };

interface Options {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}

interface Properties {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({ getUUID, getAge }: Options) => {

    return ({ name, birthdate }: Properties) => {

        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate),
        }
    }
}


// const john = buildPerson(obj);

// console.log(john)