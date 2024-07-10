/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 2.Reverse
   ● Write a JavaScript function called reverse which has one parameter, a string, and which returns
   that string in reverse
   ● For example, the call reverse("foobar") should return the string "raboof"
   Note
   If you used Array methods in your solution, try to write the same function without using the array
   methods (submit separate files for each solution)
 */

/**
* Reverses a string and prints the reversed version.
* @param {string} str - The string to be reversed.
* @return {string} - inverted text
*/
function reverse(str) {
  // Initialize a variable
  let new_string = "";

  // Loop to do the reverse order of each character of the string
  for (let i = str.length - 1; i >= 0; i--) {
    // Add the character to the 'new_string' variable
    new_string += str.charAt(i);
  }

  // Return of the new_string
  return new_string;
}

// variable declaration
let word;
let reverse_word;

// Function calls and testing
word = "ciao come stai?";
reverse_word = reverse(word);
console.log(reverse_word); // Output: ?iats emoc oaic

word = "foobar";
reverse_word = reverse(word);
console.log(reverse_word); // Output: raboof