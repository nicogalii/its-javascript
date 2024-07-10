/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 2.Word Guesser
   ● Create two arrays:
   ○ one for the letters of the word (e.g. 'C', 'A', 'T')
   ○ Another for the current guessed letters (start with '_', '_', '_' and add the correct letters to it).
   ● Write a function called guessLetter that should:
   ○ Take one argument, a letter.
   ○ Have a maximum number of guesses (e.g. 6)
   ○ Check if the letter is in the word array.
   ○ If the letter matches, add it in the correct position of the guessed array.
   ○ Show the user the current guessed letters.
   ○ Tell the user if they guessed a correct letter.
   ○ Tell the user how many guesses remain.
   ○ Tell the user if they won or lost the game.
   Continues on next page >>>
   16
   2.Word Guesser
   Call your function to make guesses:
   guessLetter('G');
   guessLetter('I');
   guessLetter('O');
   guessLetter('A');
   guessLetter('T');
   ● Bonus
   ○ Add a random reward for correct guesses and subtract a random amount for failed
   guesses.
   ○ Show the user the total reward (positive or negative).
   ○ Draw a hangman image to the console log after each guess.
   ○ Add a function that generates the letters to guess randomly.
   ○ Add a function that chooses the initial word to guess from an array of words.
   */

// Initialize the variables for the game
const lettersWord = ['C', 'A', 'T']; // Array containing the letters of the word to be guessed
const guessedLetters = ['_', '_', '_']; // Array to track the player's guesses, initially filled(riempito) with underscores
let maximumNumber = 6; // Maximum number of attemps the player has
let victory = false; // Boolean flag to indicate if the player has won or not
let finishTry = false; // Boolean flag to indicate if the player has attemps or not


/**
* Function to generated a random letter
*/
function generateRandomLetter() {
    // String with uppercase letters of the alphabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Using 'math.floor' to round the random number of 'math.random' to use to select a letter in the string 'alphabet'
    const letterRandom = Math.floor(Math.random() * alphabet.length);
    return alphabet[letterRandom];
}


/**
 *
* Function to handle(gestire) the player's guess of a letter
* @param {string} letter - letter of the word that has insert the player
*/
function guessLetter(letter) {
    // Flag to indicate if the guess was correct or not
    let isTry = false;

    // Check if the player hasn't won
    if (!victory && maximumNumber > 0) {
        // For loop to check of the letter
        for (let i = 0; i < lettersWord.length; i++) {
            // Check if the letter of the player matches with the letter of the game
            if (letter === lettersWord[i]) {
                // Update the underscore in the `guessedLetters` array with the guessed letter
                guessedLetters[i] = letter;
                isTry = true;
            }
        }

        // Checks if the letter is different and removes an try
        if (!isTry) {
            maximumNumber--;
        }

        // Checks if the try (maximunNumber) are > of 0 and if the letter is guessed
        if (isTry) {
            // Print in console the result
            console.log(guessedLetters.join(''));
            console.log(`Hai inserito la lettera: ${letter}\nHai indovinato la lettera corretta!\nTi rimangono ${maximumNumber} tentativi`
            );
        } else {
            // Print in console the result
            console.log(guessedLetters.join(''));
            console.log(`Hai inserito la lettera: ${letter}\nNON hai indovinato la lettera corretta!\nTi rimangono ${maximumNumber} tentativi`
            );
        }

        // Check if the player has won the game
        if (guessedLetters.join('') === lettersWord.join('') && maximumNumber > 0) {
            console.log(`HAI VINTO!`);
            // Set the `victory` flag to true indicating the player has won
            victory = true;

        }
    }

    // Check if the player hasn't won and hasn't finished the attemps
    if (!victory && !finishTry) {
        // Graphic representation of the little man based on your attempts
        switch (maximumNumber) {
            // Attemps are 6
            case 6:
                console.log(`
  +---+
  |   |
      |
      |
      |
      |
=========  `);
                break;

            // Attemps are 5
            case 5:
                console.log(`
  +---+
  |   |
  O   |
      |
      |
      |
=========  `);
                break;

            // Attemps are 4
            case 4:
                console.log(`
  +---+
  |   |
  O   |
 /    |
      |
      |
=========  `);
                break;


            // Attemps are 3
            case 3:
                console.log(`
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========  `);
                break;

            // Attemps are 2
            case 2:
                console.log(`
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========  `);
                break;

            // Attemp is 1
            case 1:
                console.log(`
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========  `)
                break;

            // Attemps are 0
            case 0:
                console.log(`
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========  `)
                break;

            default:
                console.log(`
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========  `)
                break;
        }
    }

    // Check if the player has run out of attempts
    if (maximumNumber <= 0 && !victory && !finishTry) {
        console.log(`HAI FINITO I TENTATIVI`);
        finishTry = true;
    }
}

// Function calls and testing
guessLetter(generateRandomLetter());
guessLetter(generateRandomLetter());
guessLetter(generateRandomLetter());
guessLetter(generateRandomLetter());
guessLetter(generateRandomLetter());
guessLetter(generateRandomLetter());
guessLetter(generateRandomLetter());
guessLetter(generateRandomLetter());
guessLetter(generateRandomLetter());
guessLetter(generateRandomLetter());
guessLetter(generateRandomLetter());
guessLetter(generateRandomLetter());
guessLetter(generateRandomLetter());
guessLetter(generateRandomLetter());



