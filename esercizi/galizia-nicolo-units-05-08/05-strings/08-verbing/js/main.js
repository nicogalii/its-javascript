/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 8.Verbing
   ● Create a function called verbing
   ● It should take a single argument, a string. If its length is at least 3, it should add 'ing' to
   its end, unless it already ends in 'ing', in which case it should add 'ly' instead
   ● If the string length is less than 3, it should leave it unchanged
   For example
   verbing('swim'): 'swimming'
   verbing('swimming'): 'swimmingly'
   verbing('go'): 'go'

 */

/**
* Add ing, ly or nothing in the end of the string
* @param {string} str - The string
* @returns {string} - Return of the concatenation of the string with ing, ly or nothing
*/
function verbing(str) {
  // Check if the length of the string is > of 3
  if (str.length > 3) {
    // Check if the last 3 characters are ing
    if (str.slice(-3) === "ing") {
      // return with add in the end the string "ly"
      return str.concat("", "ly");
    } else {
      // Return with add in the end the string "ing"
      return str.concat("", "ing");
    }
  } else {
    // Return standard string
    return str;
  }
}

// Function calls and testing
console.log(verbing("swim")); // Output: swiming
console.log(verbing("swimming")); // Output: swimmingly
console.log(verbing("go")); // Output: go