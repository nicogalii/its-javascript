/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 6.MixUp
   ● Create a function called mixUp
   ● It should take in two strings, and return the concatenation of the two strings (separated by a
   space) slicing out and swapping the first 2 characters of each
   ● You can assume that the strings are at least 2 characters long
   For example
   mixUp('mix', 'pod'): 'pox mid'
   mixUp('dog', 'dinner'): 'dig donner'
 */

/**
* Concatenation of the two strings
* @param {string} str- The first string
* @param {string}  str2 - The second string
* @return {string} - Return of the concatenation of the two strings
*/
function mixUp(str, str2) {

  // Edit of the first two letter of the two strings
  let editStr = str2.slice(0, 2) + str.slice(2);
  let editStr2 = str.slice(0, 2) + str2.slice(2);

  // Concatenation of the two strings
  return editStr.concat(" ", editStr2);
}

// Function calls and testing
console.log(mixUp("mix", "pod"));
console.log(mixUp("dog", "dinner"));