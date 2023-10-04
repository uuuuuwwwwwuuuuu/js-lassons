'use strict';

function c(arg) {
    console.log(arg);
}

//________________________________ Promise ________________________________________

console.log("Запрос данных...");

const req = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Подготовка данных...');
    
        const product = {
            name: 'TV',
            price: 2000
        };
        
        resolve(product);
        
    }, 2000);
}).then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve();
        }, 2000); 
    });
}).then(product => {
    product.modify = true;
    return product;
}).then(product => {
    console.log(product);
}).catch(() => {
    console.error('Произошла ошибка');
}).finally(() => {
    console.log('Finally');
});

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
}

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('race');
});