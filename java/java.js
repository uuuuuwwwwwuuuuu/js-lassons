'use strict';

function c(arg) {
    console.log(arg);
}

//___________________________________Callback func_____________________________________

//Проблема:

// function first () {
//     // do smth
//     setTimeout(() => {
//         c(1);
//     }, 2000);
// }

// function second () {
//     c(2);
// }

// first();
// second();

//Решение:

// function lernJS (lang, callback) {
//     c(`Я учу: ${lang}`);
//     callback();
// }

// function done () {
//     c("hi");
// }

// lernJS("Js", done);

//Решение 2:

// function lernJS (lang, callback) {
//     c(`Я учу: ${lang}`);
//     callback();
// }

// lernJS("Js", () => {c("hi")});