"use strict";

function c(arg) {
    console.log(arg);
}

//___________________________________Рекурсия_____________________________________

// function pow(x, n) {
//     let res = 1;

//     for (let i = 0; i < n; i++) {
//         res *= x;
//     }
//     return res;
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }
// c(pow(2, 3));                  //Степень     

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

// function getTotalProgressBuIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let cours of Object.values(data)) {
//         if (Array.isArray(cours)) {
//             students += cours.length;
//             for (let i = 0; i < cours.length; i++) {
//                 total += cours[i].progress;
//             }
//         } else {
//             for (let subCours of Object.values(cours)) {
//                 students += subCours.length;

//                 for (let i = 0; i < subCours.length; i++) {
//                     total += subCours[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// c(getTotalProgressBuIteration(students));

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

c(students);
// c(students);


