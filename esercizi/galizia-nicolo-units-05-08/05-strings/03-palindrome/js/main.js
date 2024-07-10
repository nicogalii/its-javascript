/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 3.Palindrome
   ● Using your reverse() function from the previous exercise, write a simple function to check if a
   string is a palindrome
   ● A palindrome is a word that reads the same backwards as forwards. For example, the word "madam"
   is a palindrome
   ● Write a JavaScript function called isPalindrome which has one parameter, a string, and which
   returns true if that string is a palindrome, else false
   ● For example, the call isPalindrome("madam") should return true, while isPalindrome("madame")
   should return false
   Bonus
   Try to write the same function without using the reverse() function
 */

/**
* Reverses a string and prints the reversed version.
* @param {string} str - The string to be reversed.
* @returns {string} - inverted text
*/
function reverse(str) {
  let new_string = "";

  // Loop to do the reverse order of each character of the string
  for (let i = str.length - 1; i >= 0; i--) {
    // Add the character to the 'new_string' variable
    new_string += str.charAt(i);
  }

  // Return of the new_string
  return new_string;
}

/**
* Check if a string is a palindrome
* @param {string} str - string to check
* @returns {boolean} - true if palindrome, false otherwise
*/
function isPalindrome(str) {
  let new_string = reverse(str);

  // Check between str e new_string
  if (str === new_string) {
    return true;

  } else {
    return false;
  }

}



// variable declaration
let word;

// function call
word = "madam";
console.log(`${word} is palindrome:`, isPalindrome(word)); // Output: madam is palindrome: true

word = "madame";
console.log(`${word} is palindrome:`, isPalindrome(word)); // Output: madame is palindrome: false

word = "anna";
console.log(`${word} is palindrome:`, isPalindrome(word)); // Output: anna is palindrome: true