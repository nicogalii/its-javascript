/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 4.Abracadabra
   ● Code 3 different solutions to change the 4th letter in the following string
   "Abracadabra" into an "X"
   ● Each solution should be in a separate folder.
   ○ Name them solution-1, solution-2, etc.
   ● Also include a doc file in which you explain what 3 ways you used
   ● Bonus: There are many ways to replace a character in a string. Code other
   solutions than the above 3
 */

// Initialize a variable
let str = "Abracadabra";

// Edit of the charAt(3) ("a") whit replace
let strEdit = str.replace(str.charAt(3), "x");

// Print in console the result
console.log(strEdit);