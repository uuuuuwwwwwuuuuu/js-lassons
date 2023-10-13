'use strict';

function c(arg) {
    console.log(arg);
}

//________________________________ Incapsulation (get/set) ________________________________________

class User {
constructor(name, age) {
    this.name = name;
    this._age = age;
}

    say() {
        c(`Имя пользователя ${this.name} ${this.surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof(age) === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            c('Недопустимое значение');
        }
    }
}

const user = new User('Denis', 27);
user.age = 17;

user.say();