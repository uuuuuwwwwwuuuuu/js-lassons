'use strict';

function c(arg) {
    console.log(arg);
}

//________________________________ JSON ________________________________________

const persone = {
    name: 'Alex',
    tel: '+807658576',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone));      //Глубокое клонирование объекта

clone.parents.mom = 'Anna';

c(persone);
c(clone);

//.stringify() - объект в JSON
//.parse() - JSON в объект
