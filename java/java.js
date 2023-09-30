'use strict';

function c(arg) {
    console.log(arg);
}

//________________________________ Rest ________________________________________

const log = function(a, b, ...c) {           //аргументы a, b при вызове присвоить обязательно, следующие - опционально
    console.log(a, b, c);
}

log('basic', 'rest', 'operator', 'usage');   //все значения аргументов после 'rest' будут помещены в массив

function calcOrDouble(number, basis = 2) {      //Если в переменную basis не будет указанно значение при вызове, значение будет равно 2    
    console.log(number * basis);
}

calcOrDouble(3);