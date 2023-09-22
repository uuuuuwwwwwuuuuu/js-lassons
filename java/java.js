"use strict";

function c(arg) {
    console.log(arg);
}

//___________________________________Mobile comands_____________________________________
// touchstart       //при нажатии
// touchmove        //при меремещении
// touchend         //при конце клика
// touchleave       //при покидании зоны объекта, на котором есть это свойство
// touchcancel      //при покидании пальцем зоны браузера

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();

        // c('Start');
        c(event.targetTouches)
    });

    // box.addEventListener('touchmove', (event) => {
    //     event.preventDefault();

    //     c('Move');
    // });

    // box.addEventListener('touchend', (event) => {
    //     event.preventDefault();

    //     c('End');
    // });
});

// touches              //Выводит кол-во пальцев на экране В ВИДЕ МАССИВА
// targetTouches        //Выводит кол-во пльцев, что взаимодействуют с конкретным объектом
// changedTouches       //Если надо, погугли