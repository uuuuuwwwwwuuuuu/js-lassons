"use strict";

function c(arg) {
    console.log(arg);
}

//________________________________ Work with window ________________________________________

const box = document.querySelector('.box');

// const width = box.clientWidth;
// const height = box.clientHeight;

const width = box.offsetWidth;
const height = box.offsetHeight;

const scrolHeight = box.scrollHeight;


c(width);
c(height);
c(scrolHeight);

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // box.style.height = scrolHeight + 'px';
    c(box.scrollTop);
});

console.log(box.getBoundingClientRect());           //Получает позицию элемента

const style = window.getComputedStyle(box);

c(style.display);