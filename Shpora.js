const c = (arg) => console.log(arg);


//__________________________________________ Всплавающие окна _____________________________________________

prompt("Текст сверху", 'Типо плэйсхолдер');     //Получает инфу от пользователя (текст, цифры и тд)
confirm("Информация")           //Получает от пользователя True or False
alert("Инфа")           //Даёт инфу пользователю

//______________________________________________ Объекты _____________________________________________

const obj = {
    x: "Текст",
    y: {
        x: 1,
        y: 4
    }
}

obj.x = 'Другой текст или число';
obj["x"] = 'Другой текст или число';

delete obj.x;

Object.assign(numbers, add)     //Соеденяет объекты
Object.entries(obj);            //Преобразует объект в массив, внутри которого находится массивы с парами [Свойство, значение]

//______________________________________________ Перебор объекта циклом

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    }
};

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            c(`Свойство: ${key} имеет значение: ${i}, которое имеет значение: ${options[key][i]}`);
        }
    } else {
        c(`Свойство: ${key} имеет значение: ${options[key]}`);
    }
}

//______________________________________________ Перебор объекта при помощи метода Object.keys()
// если прописать Object.keys().length - можно получить кол-во свойств

c(Object.keys(options));

//___________________Создание собственных методов внутри собственных объектов и диструктуризация объектов
const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: () => {
        c("Test");
    }
};

options.makeTest();

//______________________________________________ Диструктуризация
const {border, bg} = options.colors;
c(bg);

//______________________________________________ Ссылки и копии
const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

//______________________________________________ Операторы _____________________________________________

const num = 10;

(num == 20) ? c('10 = 10') : c(`${num} != 20`);     //Тернарка (If/else)

//______________________________________________ switch (проверяет только точные значения)

switch (num) {
    case 50:
        console.log("No");
        break;
    case 10:
        c("Yes");
        break;
    default:
        console.log("Not today");
        break;
}

//______________________________________________ If/else

const a = 10;

if (a == 10) {
    console.log('Что-то');
} else if (a == 9) {
    console.log('ещё что-то');
} else {
    console.log('ещё что-то там');
}

//______________________________________________ Boolean _____________________________________________

const hamburger = 3;
const frise = 1;
const cola = 0;

if (hamburger === 3 && cola || frise) {
    c("Все сыты!");
} else {
    c("Мы уходим");
}

// && всегда возвращает первое ложное значение, если выражение правдиво, возвращает последнее значение
// || всегда возвращает первое правдивое значение, если выражение ложное, возвращает последнее значение

console.log(1 && 0);            //False и вернёт последнее значение 0 
console.log(1 && 5);            //True и вернёт так же последнее значение 5
console.log(null && 5);         //False и вернёт Null так как оператор && запнулся на первом не верном выражении
console.log(0 && "Строка");     //False и вернёт 0 так как оператор && запнулся на первом не верном выражении
console.log(0 && 1);            //False и вернёт первое значение 0 так как оператор && запнулся на первом не верном выражении

//______________________________________________ Циклы _____________________________________________

//______________________________________________ While

let num = 50;

while (num <= 55) {
    c(num);
    num++;
}

//______________________________________________ Do/While

let num = 50;

do {
    c(num);
    num++;
} while (num <= 55)

//______________________________________________ For

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    } else if (i === 8) {
        break;
    }
    c(i);
}

//______________________________________________ Цикл в цикле

for (let i = 0; i < 3; i++) {
    c(i);
    for (let j = 0; j < 3; j++) {
        c(j);
    }
}

//______________________________________________ Строки и числа _____________________________________________

//______________________________________________ Строки

const some = "Some words";

c(some.substr(5, 5));    // substr(От куда начинать (по индексу), сколько букв вперёд)
some.toLowerCase()      //Нижний регистор
some.toUpperCase()      //Верхний регистор

//______________________________________________ Числа

const num = 12.5;

c(Math.round(num));      // Округляет число

const text = '12.2px';
c(parseInt(text));          // Конвертирует текст в Int
c(parseFloat(text));        // Конвертирует текст в Float

//______________________________________________ Callback func _____________________________________________

function lernJS (lang, callback) {
    c(`Я учу: ${lang}`);
    callback();
}

function done () {
    c("hi");
}

lernJS("Js", done);     //Или прописать функцию вторым аргументом

//______________________________________________ Массивы _____________________________________________

const arr = [1, 42, 53, 67, 8];
arr.sort((a, b) => {        //Сортировка по возростанию (ЧИСЛА)
    return a - b;    
});
c(arr);

//______________________________________________
const str = "Пенис, хер, давалка, хуй, блядина";
const ar = str.split(", "); //Строка в массив, а .join массив в строку
c(ar);  

//______________________________________________
arr.pop();                      //Удаление элемента с конца
arr.push(10);                   //Добавление элемента в начало
arr.splice(2, 2)                //Удалить элемент(ы) начиная с индекса првого аргумента, второй агрумент - колво элементов для удаления после выбранного                

//______________________________________________ Цикл для перебота массива

for (let v of arr) {
    c(v);
}

//______________________________________________ Клонирование и ссылки _____________________________________________

//______________________________________________ Ссылки
let a = 5, 
    b = a;

b = b + 5;

const obj = {
    a: 5,
    b: 1
};

const copy = obj;   //ссылка на obj
copy.a = 10;

//______________________________________________ Клонирование
function copy(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: {
        x: 7,
        y: 8
    }
};

const newNumbers = copy(numbers);  //копия первого уровня

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

const video = ["1", "2", "3"],
      blogs = ["4", "5", "6"],
      internet = [...video, ...blogs, "7", "8"];   //Троеточие передаёт внутринности массивов под названием после этих точек

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

//______________________________________________ ООП и прототипы _____________________________________________
const solder = {
    hill: 400,
    armor: 100,
    sayHallo: () => {
        c("Hallo");
    }
};

const john = {
    hill: 200
};

Object.setPrototypeOf(john, solder); 

const john = Object.create(solder);     //Для потокового создания объектов на основе прототипов

// _________________________________ Динамическая типизация данных _______________________________________

// Число в строку
const num = 5;
c("https://some/" + num);       //Лучше юзай бэбтики (`что-то там ${}`)

const fontSize = 28 + 'px';

// Строку в число
c(typeof(Number("5")));
c(typeof(Number.isInteger("5"))); //какого-то хуя Boolean

c(typeof(+"6")); //Унарный "+"

c(parseInt('15px', 10));    // 15 (вырезает первое число из строки, если оно первое)
c(parseInt('p15px', 10));    // NaN

let answer = +prompt('','');

// В bool
// 1)
0, '', null, undefined, NaN     //False, всё остальное - True (пустые массивы, пустые объекты и тд.)

let switcher = null;
if (switcher) {
    c('Working...');        //Не работает
}

switcher = 1;
if (switcher) {
    c('Working...');        //Работает
}

// 2)
c(typeof(Boolean("5")));        //Преобразует в Boolean

// 3)
c(!!"1"); //Так же преобразует в Boolean

//______________________________________________ Функции _____________________________________________

//______________________________________________ Обычные функции

//________________________ Дкларэйшн (прогружается в самом начале вместе со скриптом)
function someeee(arg) {
    console.log (arg);
}

someeee("hih");

//________________________ Экспрэшн (прогружается когдадо неё доходит код)
const sommmee = function(arg) {         
    console.log(arg);
}

sommmee('hih');

//________________________ Стрелочная (почти как экспрэшн)
const somes = (arg) => {
    console.log(arg)
};

somes("hih");

//______________________________________________ Замыкание

function createCounter() {          //Грубо говоря, эта функция - место для хранения значение переменной counter
    let counter = 0;

    const myFoo = function() {      //Функция действия
        counter++;                  //Увеличение значение переменной counter и передача значения в 1-ю функцию
        return counter;             //Возвращение значение переменной из 1-ой функции
    }

    return myFoo;                   //Возвращение 2-ой функции
}

const increment = createCounter();  //Теперь эта переменная это myFoo()
const c1 = increment();             //Обращаясь к переменной increment мы обращаемся к фнкции myFoo(), которая прибавляет 1 переменной counter, возвращает это значение и параллельно устанавливает это значение в переменную counter в 1-ю функцию
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

//______________________________________________ Рекурсия

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
}

function getTotalProgressBuRecursion (data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressBuRecursion(subData);

            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressBuRecursion(students);

c(result[0] / result[1]);

//______________________________________________ Получение HTML элементов _____________________________________________

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');

const buttons = document.querySelectorAll(".buttons");

buttons.forEach(item => {
    c(item);
});

const buttons = document.querySelector(".buttons");

//______________________________________________ Работа с HTML элементами _____________________________________________

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementById("circles"),
      oneCircle = circles.querySelectorAll(".circle");

box.style.backgroundColor = "blue";      //1-й вариант
box.style.width = "500px";
box.style.borderRadius = "0%";

box.style.cssText = 'bacgrond-color: red; width: 500px; border-radius: 0%;'     //2-ой вариант

btns[1].style.borderRadius = "100%";

circles.forEach (item => {
    item.style.backgroundColor = "grey";
});

const div = document.createElement("div");

div.classList.add('black');

circles.append(div);        //В конец
circles.prepend(div);        //В начало

oneCircle[1].before(div);       //Для более точной вставки (Yачало)
oneCircle[1].after(div);       //Для более точной вставки (Конец)

oneCircle[0].remove();       //Удаление элемента

oneCircle[0].replaceWith(btns[0]); //Меняет местами элементы

div.textContent = "hallo"       //Только текст

div.innerHTML = "<h1>HI</h1>" ;         //непосредственно в HTML документ

div.insertAdjacentHTML("afterend", "<h2>Hallo</h2>");
// beforbegin - перед элементом div
// afterbegin - внутри элемента div, в начало
// beforeend - внутри элемента div, в конец
// afterend - после элемента div

//______________________________________________ Event _____________________________________________

btn.addEventListener('click', () => {         //Современный вариант
    alert('hi');
})

link.addEventListener('click', (event) => {
    event.preventDefault();       //Отключает стандартное поведение браузера
});

const deleteEvent = (event) => {         //Современный вариант
  let dell = false;

  c(event.target);
  dell = true;
  if (dell) {
    btn.removeEventListener('click', deleteEvent);
  }
};

btns.forEach(item => {
  item.addEventListener('click', deleteEvent, {once: true});        //Назначение обработчика событий на все кнопки внутри массива и установка из работы 1 раз
});

//______________________________________________ Навигация в DOM _____________________________________________

//______________________________________________ Элементы
document.querySelector('[data-current = "3"]').nextElementSibling;   //следующий элемент
document.querySelector('[data-current = "3"]').previousElementSibling;     //передидущий элемент
document.querySelector("#current").parentElement;        //Родительский элемент

//______________________________________________ Ноды

document.body.childNodes;           //дочерние ноды
document.body.firstChild;           //Первый ребёнок
document.body.lastChild;            //Последний ребёнок
document.querySelector("#current").parentNode.parentNode;         //Родительский элемент
document.querySelector('[data-current = "3"]').nextSibling;       //следующий элемент
document.querySelector('[data-current = "3"]').previousSibling;      //передидущий элемент

//______________________________________________ Мобильные команды _____________________________________________

// touchstart       //при нажатии
// touchmove        //при меремещении
// touchend         //при конце клика
// touchleave       //при покидании зоны объекта, на котором есть это свойство
// touchcancel      //при покидании пальцем зоны браузера
// touches          //Выводит кол-во пальцев на экране В ВИДЕ МАССИВА
// targetTouches    //Выводит кол-во пльцев, что взаимодействуют с конкретным объектом

//_______________________Пример

box.addEventListener('touchstart', (event) => {
    event.preventDefault();

    // c('Start');
    c(event.targetTouches)
});

//___________________________________Работа со скриптами_____________________________________

//<script async src="java/java.js"></script>       //async - загружается в фоновом режиме и начинает работу сразу после его загрузки
//<script defer src="java/java.js"></script>       //defer - загружается в фоновом режиме и начинает работу по приходу его очереди



function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript('какой-то путь');

//_______________________________________ Observer ___________________________________________
//Observer служит для слежки за изменениями элементов

const box = document.querySelector('.box');

let observer = new MutationObserver(MutationRecords => {
    console.log(MutationRecords);
});

observer.observe(box, {
    childList: true                 //То, за чем следить можно подсмотреть в документации
});

//_____________________________________ Scrol ____________________________________
const box = document.querySelector('.box');

//Смотри по фотке из курса:
const wwidth = box.clientWidth;
const hheight = box.clientHeight;
const width = box.offsetWidth;
const height = box.offsetHeight;

const scrolHeight = box.scrollHeight;           //document.documentElement.scrollHeight длинна всей страницы (в пикселях)


c(width);
c(height);
c(scrolHeight);

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // box.style.height = scrolHeight + 'px';
    c(box.scrollTop);
});

console.log(box.getBoundingClientRect());           //Получает позицию элемента

const style = window.getComputedStyle(box);

//________________________________________ Интервалы ________________________________________

const btn = document.querySelector('.btn');
let timerId,
    counter = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);