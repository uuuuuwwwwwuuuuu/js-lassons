"use strict";

function c(arg) {
    console.log(arg);
}

//________________________________live collectoin________________________________________

const boxesGet = document.getElementsByClassName('box');            //Динамичная (отслеживает текущее состаяние объектов)
const boxesQuery = document.querySelectorAll('.box');               //Статичная

boxesQuery.forEach(box => {
    if (box.matches('.this')) console.log('This one!');
});

console.log(boxesQuery[0].closest('.wrapper'));

// boxesQuery[0].remove()
// boxesGet[0].remove()

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     // document.body.append(div);
    
// }

// console.log(boxesQuery);
// console.log(boxesGet);
// // console.log(document.body.children);

// console.log(Array.from(boxesGet));

