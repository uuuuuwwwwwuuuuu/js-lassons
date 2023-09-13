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

const aa = prompt ("Один из последних просмотренных фильмов?", ""),
      bb = prompt ("На скольно вы его оцените?", ""),
      cc = prompt ("Один из последних просмотренных фильмов?", ""),
      dd = prompt ("На скольно вы его оцените?", "");

personalMovieDB.movies[aa] = bb;
personalMovieDB.movies[cc] = dd;

console.log(personalMovieDB);
