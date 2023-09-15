'use strict';

function c(arg) {
    console.log(arg);
}

//________________________________________________________________________

let numberOfFilms;

function start () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt ("Какой последний фильм вы смотрели?", ""),
              b = prompt ("На скольно вы его оцените?", "");
    
        if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
            personalMovieDB.movies[a] = b;
            c("done");
        } else {
            c("error");
            i--;
        }
    }
}

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        c("Просмотренно слишком мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        c("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        c("Вы киноман");
    } else {
        c("Произошла ошибка");
    }
}

function showMyDB () {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    for (let i = 0; i < 3; i++) {
        let a = i + 1;
        personalMovieDB.genres[i] = prompt(`Ваш любимый фильм под номером ${a}`, '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

rememberMyFilms();

writeYourGenres();

detectPersonalLevel();

showMyDB();