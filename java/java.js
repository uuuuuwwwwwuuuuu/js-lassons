'use strict';

function c(arg) {
    console.log(arg);
}

//________________________________ Sort Arrays ________________________________________
////________________ filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter((name) => {
//     return name.length < 5;         //Вернёт изменённый массив с элементами, длинна которых не длиннее 5 букв
// });
// c(shortNames);

//________________ map

// const arr = ['IvAn', 'AnNA', 'HeLlO'];
// const res = arr.map(item => item.toLowerCase());
// c(res);

//________________ every / some

// const arr = [4, '2', 3];

// c(arr.some(item => typeof(item) == 'number'));           //Если хотя бы один эллемент подходит - True

// c(arr.every(item => typeof(item) == 'number'));             //Если все элементы подходят - True

//________________ reduce

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => {                  //Если забыл, пересмотри, если кратко, складывает все элементы массива
//     return `${sum}, ${current}`;
// });

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => {                  
//     return sum + current;
// });

// c(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog:'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);

c(newArr);