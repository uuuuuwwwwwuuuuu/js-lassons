'use strict';

const c = (arg) => {
    console.log(arg);
}

//________________________________________________________________________

const personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: () => {
        personalMovieDB["count"] = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB["count"] == '' || personalMovieDB["count"] == null || isNaN(personalMovieDB["count"])) {
            personalMovieDB["count"] = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: () => {
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
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            c("Просмотренно слишком мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            c("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            c("Вы киноман");
        } else {
            c("Произошла ошибка");
        }
    },
    showMyDB: () => {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: () => {
        for (let i = 0; i < 3; i++) {
            let a = i + 1;
             let b = prompt(`Ваш любимый жанр №${a}`, '');

            if (b != null && b.trim() != '') {
                personalMovieDB.genres[i] = b;
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            const x = i + 1;
            c(`Любимый жанр ${x} - это ${item}`);
        })
    },
    toggeleVisibleMyDB: (obj) => {
        if (obj.privat) {
            obj.privat = false;
        } else {
            obj.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggeleVisibleMyDB(personalMovieDB);
personalMovieDB.showMyDB();

