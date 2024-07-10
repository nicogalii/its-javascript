/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 4.Capital
   ● Write a JavaScript function called capital which has one parameter, a string, and which returns
   that string with the first letter capitalized
   ● For example, the call capital("hello world") should return the string "Hello world"
   Bonus
   Modify the function so that it capitalizes each word. capital2("my name is john") should return the
   string "My Name Is John"
 */


/**
 * Capitalize the first letter of the string
 * @param {string} str - Text
 * @return {string} - Text with first letter capitalized
 */
function capital(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


/**
 * Capitalize the first letter of each word in a sentence
 * @param {string} sentence - Sentence to capitalize
 * @return {string} - Sentence with each word capitalized
 */
function capital2(sentence) {
  // Initialize a variable
  let capitalizedSentence = "";

  // Split the sentence into an array of words
  const words = sentence.split(" ");

  // Loop of each word in the 'words' array
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // Capitalize the current word using the 'capital' function
    const capitalizedWord = capital(word);

    // Add the capitalized word to the 'capitalizedSentence' variable
    capitalizedSentence += capitalizedWord + " ";
  }

  // Return the capitalized sentence
  return capitalizedSentence;
}


// Function calls and testing
const word = "hello world!";
const capitalizedWord = capital(word);
console.log(capitalizedWord); // Output: Hello world!

const sentence = "Il mio nome è john";
const capitalizedSentence = capital2(sentence);
console.log(capitalizedSentence); // Output: Il Mio Nome È John

