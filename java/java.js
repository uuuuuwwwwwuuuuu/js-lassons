'use strict';

function c(arg) {
    console.log(arg);
}

//________________________________Создание копий________________________________________

// let a = 5, 
//     b = a;

// b = b + 5;

// c(a);
// c(b);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;   //ссылка на obj
// copy.a = 10;

// function copy(mainObj) {
//     let objCopy = {};
//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: {
//         x: 7,
//         y: 8
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.b.x = 20;

// c(numbers);
// c(newNumbers);

// const add = {
//     d: 17,
//     e: 20
// }

// c(Object.assign(numbers, add));  //Соеденяет объекты
// const clone = Object.assign({}, add);
// clone.d = 20;
// c(add);
// c(clone);

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();

// newArray[1] = "dlmsdvmd";
// c(newArray);
// c(oldArray);

// const video = ["1", "2", "3"],
//       blogs = ["4", "5", "6"],
//       internet = [...video, ...blogs, "7", "8"];

// c(internet);

// function loh(a, b, s) {
//     c(a);
//     c(b);
//     c(s);
// }

// const num = [2, 5, 7];

// loh(...num);

// const arr = ["a", "b"];

// const newArr = [...arr];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};