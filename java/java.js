"use strict";

function c(arg) {
    console.log(arg);
}

//________________________________ function constractor ________________________________________

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        c(`Hello, ${this.name}`)
    }
}

User.prototype.exit = function() {
    c(`Пользователь ${this.name} ушёл`)
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

c(ivan);
c(alex);