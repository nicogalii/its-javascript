/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 1.Print reverse
   ● Write a JavaScript function called printReverse which has one parameter, a string, and which
   prints that string in reverse
   ● For example, the call printReverse("foobar") should result in "raboof" being displayed
   Note
   If you used Array methods in your solution, try to write the same function without using the array
   methods (submit separate files for each solution)
 */

/**
* Reverses a string and prints the reversed version to the console.
* @param {string} str - The string to be reversed.
* @return {void}
*/
function printReverse(str) {
  // Initialize a variable
  let new_string = "";

  // Loop to do the reverse order of each character of the string
  for (let i = str.length - 1; i >= 0; i--) {
    // Add the character to the 'new_string' variable
    new_string += str.charAt(i);
  }

  // Print the reversed string to the console
  console.log(new_string);
}


// Function calls and testing
printReverse("foobar"); // Output: raboof