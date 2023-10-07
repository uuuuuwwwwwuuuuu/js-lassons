'use strict';

function c(arg) {
    console.log(arg);
}

//________________________________ Regular ________________________________________
// const str = 'My name id R2D2';
// const reg = /\d/ig;

//flags
// i   //Поиск независимо от регистра
// g   //Глобальный поиск
// m   //Многострочный режим

//Classes
// \d
// \w
// \s

// console.log(str.search(reg));
// console.log(str.match(reg));

// const pass = prompt('Password', '');

// c(pass.replace(/./g, "*"));

// const res = +ans.match(reg).join('');
// c(res);

const str = 'My name id R2D2';

c(str.match(/\w\d\w\w/i));

// Revers classes
// \D
// \W
// \S