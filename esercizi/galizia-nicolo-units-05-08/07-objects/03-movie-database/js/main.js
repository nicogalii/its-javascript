/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 3.Movie database
   ● Create an object to store the following information about a movie: title (a
   string), duration (a number), and stars (an array of strings).
   ● Create an Array of objects that can hold several movies.
   ● Create a function to print out the movie information like so: "Puff the Magic
   Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
   ● Test the function by printing one movie.
   ● Use the function to print all the movies in the Array.
 */

/**
 * Function used to print the information of a single movie on console
 * @param {object} movie - Single movie
 */
function printMovie(movie) {
  console.log("***SINGOLO FILM ***");

  // Print on console the information of the single film
  console.log(
    `Il film ${movie.title} ha una durata di ${
      movie.duration
    } minuti. \nLe Stars sono: ${movie.stars.join(", ")}`
  );
}

/**
 * Function used to print the information of the movies on console
 * @param {object} movies - A database of movies
 */
function printAllMovies(movies) {
  console.log("\n\n\n***DATABASE DI FILM***");

  for (let i = 0; i < movies.length; i++) {
    // Print the stars of the movie
    console.log("\n\nTitolo del film: ", movies[i].title);

    // Print the duration of the movie
    console.log("Durata del film: ", movies[i].duration, "minuti");

    // Print the stars of the movie
    console.log("STARS: ");
    for (let j = 0; j < movies[i].stars.length; j++) {
      console.log("La star ", j + 1, "è:", movies[i].stars[j]);
    }
  }
}

// Object of a single movie
let movie = {
  title: "Fast and Furious 7",
  duration: 150,
  stars: ["Paul Walker", " Vin Diesel", ' Dwayne "The Rock" Johnson'],
};

// Object of the movies
let movies = [
  {
    title: "Fast and Furious 7",
    duration: 150,
    stars: ["Paul Walker", "Vin Diesel", ' Dwayne "The Rock" Johnson'],
  },
  {
    title: "Fast and Furious 2",
    duration: 150,
    stars: ["Paul Walker", "Tyrese Gibson", "Eva Mendes"],
  },
  {
    title: "Fast and Furious 5",
    duration: 150,
    stars: ["Vin Diesel", "Paul Walker", 'Dwayne "The Rock" Johnson'],
  },
];

// Function calls and testing
printMovie(movie);
printAllMovies(movies);
