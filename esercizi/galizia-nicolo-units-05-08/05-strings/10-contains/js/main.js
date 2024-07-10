/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 10.Contains
   ● Create a function called aContainsb
   ● It should take in two strings, and return true if the first string contains the second,
   otherwise it should return false
   For example
   aContainsB ("Another hello world", "hell");
 */

/**
* Check if the second string is include in the first string
* @param {string} str - The first string
* @param {string} str2 - The second string
* @return {boolean}  - Return true if the second string is include in the first string and false if the second string isn't include in the first string and false
*/
function aContainsb(str, str2) {
  // Check if the second string is include in the first string
  if (str.includes(str2) === true) {
    // Return if is true
    return `${str2} E' contenuto in: ${str}`;
  } else {
    // Return if is false
    return `${str2} NON e contenuto in: ${str}`;
  }
}

// Function calls and testing
console.log(aContainsb("Another hello world", "hell")); // Output: hell E' contenuto in: Another hello world
console.log(aContainsb("Another hello world", "ciao")); // Output: ciao NON e contenuto in: Another hello world
console.log(aContainsb("Another hello world", "wo")); // Output: wo E' contenuto in: Another hello world
