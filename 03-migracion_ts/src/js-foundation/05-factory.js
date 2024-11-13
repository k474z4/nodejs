// Un factory function es una funcion que regresa otra funcion
// El uso de factory function nos permite crear aplicaciones tolerante a cambios

// const { getAge, getUUID } = require('../plugins')

// const obj = { name: 'John', birthdate: '1996-07-18' };

const buildMakePerson = ({getUUID, getAge}) => {

    return ({ name, birthdate }) => {

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

module.exports = {
    buildMakePerson,
}