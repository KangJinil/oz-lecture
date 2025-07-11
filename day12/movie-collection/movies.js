// 변수 선언
let movies = [];
var count = 0;

// 심형래 영화 3편
let movie1 = {
    title: "디워",
    director: "심형래",
    year: 2007,
    genre: "Fantasy",
};
let movie2 = {
    title: "용가리",
    director: "심형래",
    year: 1999,
    genre: "Sci-Fi",
};
let movie3 = {
    title: "영구와 땡칠이",
    director: "심형래",
    year: 1989,
    genre: "Comedy",
};

// 배열에 영화 추가
movies.push(movie1, movie2, movie3);

// 영화 목록 출력
function printMovies(movieArray = []) {
    console.log("Movie Collection:");
    for (let i = 0; i < movieArray.length; i++) {
        let movie = movieArray[i];
        console.log(
            i +
                1 +
                `. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Genre: ${movie.genre}`
        );
    }
    count = movieArray.length;
    console.log(`Total Movies: ${count}\n`);
}

// 특정 장르 영화만 출력
function printMoviesByGenre(movieArray, genre) {
    let found = false;
    console.log(`${genre} Movies:`);
    for (let i = 0; i < movieArray.length; i++) {
        let movie = movieArray[i];
        if (movie.genre === genre) {
            found = true;
            console.log(
                i +
                    1 +
                    `. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Genre: ${movie.genre}`
            );
        }
    }
    console.log(""); // 줄바꿈
}

// 평균 출판년도
const calculateAverageYear = function (movieArray) {
    if (movieArray.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < movieArray.length; i++) {
        sum += movieArray[i].year;
    }
    return (sum / movieArray.length).toFixed(1); // 소수점 1자리
};

// 가장 최신 영화 찾기
const findNewestMovie = (movieArray) => {
    if (movieArray.length === 0) return null;
    let newest = movieArray[0];
    for (let i = 1; i < movieArray.length; i++) {
        if (movieArray[i].year > newest.year) {
            newest = movieArray[i];
        }
    }
    return newest;
};

// ...rest를 사용해서 영화 여러 편 추가
function addMovies(...movieObjs) {
    for (let i = 0; i < movieObjs.length; i++) {
        movies.push(movieObjs[i]);
    }
}

// addMovies
addMovies(
    {
        title: "영구와 공룡 쭈쭈",
        director: "심형래",
        year: 1993,
        genre: "Comedy",
    },
    {
        title: "티라노의 발톱",
        director: "심형래",
        year: 1994,
        genre: "Adventure",
    }
);

// 통계 출력 함수
function printStatistics(movieArray) {
    const avgYear = calculateAverageYear(movieArray);
    const newest = findNewestMovie(movieArray);

    console.log("Statistics:");
    console.log(`Average Year: ${avgYear}`);
    if (newest) {
        console.log(`Newest Movie: ${newest.title} (${newest.year})\n`);
    }
}

// 전체 영화 목록 출력
printMovies(movies);

// 특정 장르만 출력
printMoviesByGenre(movies, "Sci-Fi");
printMoviesByGenre(movies, "Comedy");
printMoviesByGenre(movies, "Action"); // 없는 장르

// 통계 출력
printStatistics(movies);
