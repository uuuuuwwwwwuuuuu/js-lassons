"use strict";

function c(arg) {
    console.log(arg);
}

//_________________________________Оператор опциональной цепочки_______________________________________


const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// if (block) {
//     console.log(block.textContent);
// }

console.log(block?.textContent);            //Тоже самое что и с if
// block?.textContent = '123';            //Так нельзя

const userData = {
    name: 'Ivan',
    age: null,
    say: () => {
        console.log('hi');
    }
}

userData.say();
userData.hay?.();

// if(userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

console.log(userData.skills?.js);           //Тоже самое что и с if

