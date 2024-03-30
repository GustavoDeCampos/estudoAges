"use strict";
function PickProperty(user, property) {
    return user[property];
}
const user = {
    name: "Gustavo",
    age: 20,
    address: {
        street: "Rua Jorge Nunes",
        number: 640
    }
};
const video = {
    title: "Aula de Typescript",
    duration: 180
};
console.log(PickProperty(user, 'age'));
const conn1 = { name: 'postgres', url: 'postgres://user:password' };
const conn2 = { name: 'mysql', url: 'myslq://user:password' };
const conn3 = { name: 'sqlite', url: 'sqlite://user:password' };
const videoTest = {
    title: 'Aula de Typescript',
    duration: 180
};
function PickProperty1(obj, property) {
    return obj[property];
}
PickProperty1(videoTest, 'title');
PickProperty1(user, 'age');
