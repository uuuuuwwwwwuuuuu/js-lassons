'use strict';

function c(arg) {
    console.log(arg);
}

//_________________________________Динамическая типизация данных_______________________________________

//Число в строку
// const num = 5;
// c("https://some/" + num);

// const fontSize = 28 + 'px';

//Строку в число
// c(typeof(Number("5")));
// c(typeof(Number.isInteger("5"))); //какого-то хуя Boolean

// c(typeof(+"6")); //Унарный "+"

// c(parseInt('15px', 10));    // 15 (вырезает первое число из строки, если оно первое)
// c(parseInt('p15px', 10));    // NaN

// let answer = +prompt('','');

//В bool
// 1)
// 0, '', null, undefined, NaN     //False, всё остальное - True (пустые массивы, пустые объекты и тд.)

// let switcher = null;
// if (switcher) {
//     c('Working...');        //Не работает
// }

// switcher = 1;
// if (switcher) {
//     c('Working...');        //Работает
// }

// 2)
// c(typeof(Boolean("5")));        //Преобразует в Boolean

// 3)
// c(!!"1"); //Так же преобразует в Boolean