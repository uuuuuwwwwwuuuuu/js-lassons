'use strict';

function c(arg) {
    console.log(arg);
}

//__________________________________Массивы и псевдомассивы______________________________________

const arr = [1, 42, 53, 67, 8];
arr.sort((a, b) => {        //Сортировка по возростанию
    return a - b;    
});
c(arr);

// const str = "Пенис, хер, давалка, хуй, блядина";
// const ar = str.split(", ");
// c(ar);  //Строка в массив, а .join массив в строку


// arr.forEach((item, i, arr) => {
//     c(`${i}: ${item} Внутри массива ${arr}`);
// });



// arr.pop();
// arr.push(10);


// for (let i = 0; i < arr.length; i++) {
//     c(arr[i]);
// }

// for (let v of arr) {
//     c(v);
// }

// const str = prompt("", "");
// const arr = str.split(" ");
// arr.sort();
// c(arr.join("; "));