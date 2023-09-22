"use strict";

function c(arg) {
    console.log(arg);
}

//_______________________________Нулиш оператор ??_________________________________________

const box = document.querySelector('.box');

const newH = 100;
const newW = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
}

changeParams(box, newH, newW);

// let userName;
// let userKey;

// c(userName ?? userKey ?? 'User');          //Выводит то, что после ?? (Работает только с Null и Undefinde)

