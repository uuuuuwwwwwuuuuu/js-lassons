"use strict";

function c(arg) {
    console.log(arg);
}

//________________________________________________________________________

// let id = Symbol('id');

// const obj = {
//     name: 'Test',
//     [id]: 1,
//     getId: function() {                 //стрелочную функцию здесь использовать нельзя
//         return this[id];
//     }
// };

// c(obj[Object.getOwnPropertySymbols(obj)[0]]);

const myDB = {
    movies: [],
    actors: [],
    [Symbol.for('id')]: 123
}

//Сторонний код библиотеки

myDB.id = '3732503';

c(myDB[Symbol.for('id')]);
c(myDB);
