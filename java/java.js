const c = (arg) => {
    console.log(arg);
}

//_________________________________________________________Циклы в цикле___________________________________________________

// for (let i = 0; i < 3; i++) {
//     c(i);
//     for (let j = 0; j < 3; j++) {
//         c(j);
//     }
// }

// *
// **
// ***
// ****
// *****
// ******

// let res = ""

// for (let i = 0; i <= 6; i++) {
//     for (let j = 0; j < i; j++) {
//         res += "*";
//     }

//     res += "\n"
// }
// c(res);

// let res = ""

// fir: for (let i = 0; i < 3; i++) {
//     c(`First iter: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         c(`Second iter: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) break fir;
//             c(`Third iter: ${k}`);
//         }
//     }
// }