'use strict';

const c = (arg) => {
    console.log(arg);
}

//_________________________________ Task recursia _______________________________________

const animals = {
    cats: {
        cat1: {
            name: 'Barsic',
            age: 7,
            childrens: {
                kitten1: {
                    name: 'Myrka',
                    age: 2
                }
            }
        },
        cat2: {
            name: 'Luna',
            age: 3
        }
    }
};
// debugger
function sumAge(data) {
    if (!(typeof(data) == 'object')) {
        let total = 0;
        if (!(typeof(data) == 'string')) {

            total += data;
        }  
        return total;
    } else {
        let total = 0;
        
        for (let key of Object.values(data)) {
            const subData = sumAge(key);

            total += subData;
        }
        return total;
    }
}

c(sumAge(animals));