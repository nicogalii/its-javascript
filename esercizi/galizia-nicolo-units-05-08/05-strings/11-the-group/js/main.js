/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 11.The group
   ● Use the previous function to write another function called group that checks whether a string is
   part of another longer string that is a list of names of a group
   The function should output the results to the console
   let group = "Mary, James, and John";
   let oldGuy = "James";
   // Outputs: "James IS part of the group"
   let newGuy = "Philip";
   // Outputs: "Philip is NOT part of the group"
 */

/**
* Check if the second string is include in the first string
* @param {string} str - The first string
* @param {string} str2 - The second string
* @return {boolean}  - Return true if the second string is include in the first string and false if the second string isn't include in the first string and false
*/
function group(str, str2) {
  // Check if the second string is include in the first string
  if (str.includes(str2) === true) {
    // Return if is true
    return `${str2} FA parte del gruppo`;
  } else {
    // Return if is false
    return `${str2} NON FA parte del gruppo`;
  }
}


// Function calls and testing
let groupGuy = "Mary, James, and John";
let oldGuy = "James";
console.log(group(`${groupGuy}`, `${oldGuy}`)); // Output: James FA parte del gruppo