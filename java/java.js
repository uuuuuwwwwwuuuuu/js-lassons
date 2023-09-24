"use strict";

function c(arg) {
    console.log(arg);
}

//________________________________ Set ________________________________________

const arr = ['Alex', 'Anna', 'Oleg', 'Anna'];
// const set = new Set(arr);

// set.add('Ivan');
// set.add('Oleg');
// c(set);

function unique (arr) {
    return Array.from(new Set(arr));
}

c(unique(arr));
// set.delete(value);
// set.has(value);
// set.clear(value);
// set.size(value);

// for (let i of set) {
//     c(i);
// }

// set.forEach((item, valueAgaing, set) => {
//     console.log(valueAgaing, item);
// }); 
