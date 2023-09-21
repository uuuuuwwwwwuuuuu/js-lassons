"use strict";

function c(arg) {
    console.log(arg);
}

//___________________________________Навигация по DOM дереву_____________________________________

//_________________________Ноды_____________________________
// c(document.body);
// c(document.documentElement);
// c(document.body.childNodes);           //дочерние ноды
// c(document.body.firstChild);           //Первый ребёнок
// c(document.body.lastChild);            //Последний ребёнок
// c(document.querySelector("#current").parentNode.parentNode);         //Родительский элемент
// c(document.querySelector('[data-current = "3"]').nextSibling);       //следующий элемент
// c(document.querySelector('[data-current = "3"]').previousSibling);      //передидущий элемент

//_________________________Элементы_________________________
// c(document.querySelector('[data-current = "3"]').nextElementSibling);   //следующий элемент
// c(document.querySelector('[data-current = "3"]').previousElementSibling);     //передидущий элемент
// c(document.querySelector("#current").parentElement);        //Родительский элемент

//__________________________________________________________

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {

//         continue;
//     }

//     c(node);
// }