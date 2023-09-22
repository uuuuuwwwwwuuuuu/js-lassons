"use strict";

function c(arg) {
    console.log(arg);
}

//___________________________________Работа со скриптами_____________________________________

const p = document.querySelectorAll('p');

c(p);


// <script async src="java/java.js"></script>       async - загружается в фоновом режиме и начинает работу сразу после его загрузки
// <script defer src="java/java.js"></script>       defer - загружается в фоновом режиме и начинает работу по приходу его очереди



function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript('какой-то путь');

