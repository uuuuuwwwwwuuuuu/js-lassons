'use strict';

function c(arg) {
    console.log(arg);
}

//________________________________________________________________________

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i < 2; i++) {
//     const a = prompt ("Какой последний фильм вы смотрели?", ""),
//           b = prompt ("На скольно вы его оцените?", "");

//     if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
//         personalMovieDB.movies[a] = b;
//         c("done");
//     } else {
//         c("error");
//         i--;
//     }
// }

if (personalMovieDB.count < 10) {
    c("Просмотренно слишком мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    c("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    c("Вы киноман");
} else {
    c("Произошла ошибка");
}

console.log(personalMovieDB);
