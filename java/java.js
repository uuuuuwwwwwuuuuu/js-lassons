"use strict";

function c(arg) {
  console.log(arg);
}

//________________________________________________________________________

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementById("circles"),
      oneCircle = circles.querySelectorAll(".circle");

// box.style.backgroundColor = "blue";      //1-й вариант
// box.style.width = "500px";
// box.style.borderRadius = "0%";
// box.style.cssText = 'bacgrond-color: red; width: 500px; border-radius: 0%;'     //2-ой вариант

// btns[1].style.borderRadius = "100%";

// circles[0].style.backgroundColor = "red"; // отдельного элемента в массиве

// for (let i = 0; i < circles.length; i++) {      //Цикл для задания стилей нескольким элементам, взятым из массива (старый  пример)
//     circles[i].style.backgroundColor = "grey";
// }

// circles.forEach (item => {
//     item.style.backgroundColor = "grey";
// });

// const text = document.createTextNode("hi");
const div = document.createElement("div");

div.classList.add('black');

// document.querySelector("#circles").append(div);
circles.append(div);        //В конец
// circles.prepend(div);        //В начало

// oneCircle[1].before(div);       //Для более точной вставки (Yачало)
// oneCircle[1].after(div);       //Для более точной вставки (Конец)

// oneCircle[0].remove();       //Удаление элемента

// oneCircle[0].replaceWith(btns[0]); //Меняет местами элементы

// div.textContent = "hallo"       //Только текст

div.innerHTML = "<h1>HI</h1>" ;         //непосредственно в HTML документ

div.insertAdjacentHTML("afterend", "<h2>Hallo</h2>");
// beforbegin - перед элементом div
// afterbegin - внутри элемента div, в начало
// beforeend - внутри элемента div, в конец
// afterend - после элемента div
