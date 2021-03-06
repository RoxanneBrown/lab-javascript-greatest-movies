// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    return movies.map(function (movie) {
        return movie.director
    })
}
getAllDirectors(testArr)


//that receives an array of movies as an argument and returns a new(mapped array).
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const filtered = movies.filter(function (movie) {
        return movie.director === 'Steven Spielberg' &&
            movies.genre.includes('Drama')
    })
    return filtered.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    } else if (movies.rate === 8 && movies.rate === 8) {
        return 8;
    }

}
const avRate = movies.reduce(function (sum, movie) {
    return sum + movie.rate;
})



// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average