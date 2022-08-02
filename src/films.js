// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter((movie) => movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverage(array) {
  const initialValue = 0;
  const numberOfMovies = array.length;
  const average =
    array.reduce((acc, curr) => acc + curr.score, initialValue) /
    numberOfMovies;

  return Number.parseFloat(average.toFixed(2));
}
function moviesAverageOfDirector(array, director) {
  const filteredArray = array.filter((movie) => movie.director === director);
  const average = moviesAverage(filteredArray);

  return average;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  return array
    .map((movie) => movie.title)
    .sort((title1, title2) => title1.localeCompare(title2))
    .slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = [...array].sort(
    (movie1, movie2) =>
      movie1.year - movie2.year || movie1.title.localeCompare(movie2.title)
  );
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const filteredArray = array.filter(
    (movie) => movie.genre.includes(category) && typeof movie.score === 'number'
  );
  const average = moviesAverage(filteredArray);

  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const result = [...array].map((movie) => {
    const moviecCopy = { ...movie };
    if (typeof moviecCopy.duration === 'string') {
      let [hours, minutes] = moviecCopy.duration.split(' ');
          hours = Number.parseInt(hours?.replace('h', '')) || 0;
          minutes = Number.parseInt(minutes?.replace('min', '')) || 0;
          moviecCopy.duration = hours * 60 + minutes;
     }
    return moviecCopy;
  });
  return result;
}



// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const maxScore = [...array].filter((movie) => movie.year === year).map(movie => movie.score).reduce((acc, curr) => Math.max(acc, curr));
  const result = [...array].filter((movie) => movie.year === year && movie.score === maxScore);

  return result;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
