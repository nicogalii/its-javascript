/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 1.Top choice
   Create an array to hold your top choices (colors, pets, books, whatever).
   For each choice, log to the screen a string like: "My #1 choice is blue."
   Bonus: Change it to add the correct number suffix, e.g. "My 1st choice, "My 2nd
   choice", "My 3rd choice", "My 4th choice", etc.
 */

// array of the top choise
const myTopChoice = ['rosso', 'cane', 'palestra'];
// for loop of the top choice
for (let i = 0; i < myTopChoice.length; i++) {
  // Print in console the result
  console.log(`La mia scelta n`, i + 1, `è ${myTopChoice[i]}`);
}