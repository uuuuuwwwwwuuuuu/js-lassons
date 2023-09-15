'use strict';

function c(arg) {
    console.log(arg);
}

//___________________________________Дистриктуризация_____________________________________

//Создание и удаление свойства объекта__________
// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red"
//     }
// };

// delete options.name;

// c(options);

//Перебор объекта выше при помощи цикла__________
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             c(`Свойство: ${key} имеет значение: ${i}, которое имеет значение: ${options[key][i]}`);
//         }
//     } else {
//         c(`Свойство: ${key} имеет значение: ${options[key]}`);
//     }
// }

//Перебор кол-ва свойств объекта при помощи цикла__________
// let counter = null;
// for (let key in options) {
//     counter++;
// }
// c(counter);

//Перебор объекта при помощи метода Object.keys(), если прописать Object.keys().length - можно получить кол-во свойств_________
// c(Object.keys(options));

//Создание собственных методов внутри собственных объектов и диструктуризация объектов
// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red"
//     },
//     makeTest: () => {
//         c("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// c(bg);