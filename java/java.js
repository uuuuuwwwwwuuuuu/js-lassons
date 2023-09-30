'use strict';

function c(arg) {
    console.log(arg);
}

//________________________________ Work with server ________________________________________

const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //         // c('hi')
    //     } else {
    //         inputUsd.value = 'Что-то пошло не так'
    //     }
    // });
    
    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            // c('hi')
        } else {
            inputUsd.value = 'Что-то пошло не так'
        }
    });

    // request.open(method, url, async, login, pass);          //Шаблон

    // status - состаяние сервера (в виде код, например : 404)
    // statusText - состаяние сервера (в виде текста)
    // response - ответ
    // readyState - состояние ответа (если забыл, пересмотри по курсу, +- 10-я минута)


});