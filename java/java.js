"use strict";

function c(arg) {
    console.log(arg);
}

//________________________________ Delegirovanie ________________________________________

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector(".btn-block");

// c(btns[0].classList.length);
// c(btns[0].classList.item(0));
// btns[1].classList.add('red');
// btns[0].classList.remove('blue');
// btns[0].classList.toggle('blue');

// if (btns[1].classList.contains('red')) {
//     c('red');
// }

// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// });

// console.log(btns[0].className);

wrapper.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON' && event.target) {
        c('Hallo');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn); 