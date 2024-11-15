"use strict";
// Un factory function es una funcion que regresa otra funcion
// El uso de factory function nos permite crear aplicaciones tolerante a cambios
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const john = buildPerson(obj);
// console.log(john)
