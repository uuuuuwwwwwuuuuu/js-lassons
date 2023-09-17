'use strict';

const c = (arg) => console.log(arg)


//________________________________ООП_________________________________________

// let str = "some",
//     strObj = new String(str);

// c(typeof(str));     //str
// c(typeof(strObj));  //obj

// console.dir([1, 2, 3]);

const solder = {
    hill: 400,
    armor: 100,
    sayHallo: () => {
        c("Hallo");
    }
};

// const john = {
//     hill: 200
// };

// john.__proto__ = solder;        //Old

// Object.setPrototypeOf(john, solder);        //New

const john = Object.create(solder);     //Для потокового создания объектов на основе прототипов

