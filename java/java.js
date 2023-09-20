"use strict";

function c(arg) {
  console.log(arg);
}

//________________________________________________________________________

// const btns = document.querySelectorAll("button"),
//       overlay = document.querySelector(".overlay")

// btn.onclick = () => {        //Старый формат
//   alert("hi");
// }

// btn.addEventListener('click', () => {         //Современный вариант
//   alert('hi');
// })

// const deleteEvent = (event) => {         //Современный вариант
//   let dell = false;

//   c(event.target);
//   dell = true;
//   if (dell) {
//     btn.removeEventListener('click', deleteEvent);
//   }
// };

// const deleteEvent = (event) => {
//   c(event.target);
//   c(event.type);
  
// };

// btns.forEach(item => {
//   item.addEventListener('click', deleteEvent, {once: true});        //Назначение обработчика событий на все кнопки внутри массива и установка из работы 1 раз
// });


// overlay.addEventListener('click', deleteEvent)    //сплытие событий

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//   event.preventDefault();       //Отключает стандартное поведение браузера
//   c('Вы перешли в ютуб');
// });