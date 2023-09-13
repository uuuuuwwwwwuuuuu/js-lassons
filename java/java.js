function c(arg) {
    console.log(arg);
}

//________________________________________________________________________

numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB['movies'] = {
    lastFilm: prompt ("Один из последних просмотренных фильмов?", ""),
    gradeFilm: prompt ("На скольно вы его оцените?", "")
};

console.log(personalMovieDB);