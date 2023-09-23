"use strict";

function c(arg) {
    console.log(arg);
}

//________________________________ Map ________________________________________

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        c(`${this.name} ${this.surname}`);
    }
}

const userMap = new Map(Object.entries(user));          //Из объекта в карту
c(userMap);

const newUserObj = Object.fromEntries(userMap);
c(newUserObj);

// const shops = [
//     {rice: 500},
//     {oil: 200},
//     {dread: 50}
// ];

// const shopsMoney = [5000, 20000, 15000]

// const map = new Map([
//     [{paper: 400}, 8000]
// ]);

// // map.set(shops[0] , 5000);


// for (let i = 0; i < shops.length; i++) {            //Цикл For of здесь не работает
//     map.set(shops[i], shopsMoney[i]);
// }

// // c(map.get(shops[0])); 
// // c(map.has(shops[0])); 

// // map.delete(key);            //Удаляет конкретный элемент из карты
// // map.clear();                //Очищает карту
// // map.size(key);              //Кол-во элементов на данный момент внутри карты

// //Перебот карт

// // c(map.keys(map));

// // const goods = [];
// // for (let shops of map.keys()){
// //     goods.push(Object.keys(shops)[0]);
    
// // }
// // c(goods);

// // for (let price of map.values()) {
// //     c(price);
// // }

// // for (let [shop, price] of map.entries()) {          //Здесь диструктуризация, можно просто одну переменную поставить, крч понял, если нет, иди нахуй или смотри ролик про Map
// //     console.log(price, shop);
// // }

// // map.forEach((value, key, map) => {
// //     console.log(key, value);
// // })