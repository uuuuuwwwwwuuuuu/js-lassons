'use strict';

function c(arg) {
    console.log(arg);
}

//________________________________ This ________________________________________
// 1) Обычная функция: this = window, если "'use strict';": undefined

// function showThis(a, b) {
//     function sum() {
//         return a + b;
//     }

//     return c(sum());
// }
// showThis(4, 3);

// 2) Контекст у методов объекта - сам объект

// const obj = {
//     a: 20,
//     b: 15,
//     sum : function() {
//         c(this);
//     }
// }

// obj.sum();

// 3) В функциях конструкторах и классах this ссылается на только что созданый объект, на основе этого конструктора, присваивая ему 
// значение сразу, если забыл, пересмотри урок 15 js в работе

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);

// 4) Ручная привязка this: call, apply, bind

// function sayName(surmane) {
//     c(this);
//     c(this.name + surmane);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, ' Smith');
// sayName.apply(user, [' Smith']);

// //______________
// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);       //Здесь в переменную дабл устанавливаю функцию, в которой this будет 2
// c(double(13));                      //Здесь вызываю функцию и устанавливаю зачение num 13

const btn = document.querySelector('button');

btn.addEventListener('click', function() {          //Если юзаем this, стрелочная функция не подойдёт
    this.style.backgroundColor = 'red';
});

const obj = {           //Прочитай определение стрелочной функции (она не имеет своего контекста вызова)
    num: 5,
    sayNumber: function() {
        const say = () => {
            c(this);
        }

        say();
    }
};

obj.sayNumber(); 

const double = a => a * 2;

c(double(5));