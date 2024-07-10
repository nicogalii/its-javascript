/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 5.Money
   ● Create a function called Money
   ● It should take a single argument, an amount, and return '<amount> dollars'
   ● Add a smiley at the end if the amount is 1 million. Deal with edge cases
   For example
   Money(1): 1 dollar
   Money(10): 10 dollars
   Money(1000000): 1000000 dollars ;)
   Bonus
   add to the function the ability to convert dollars to euros
   Money(10): 10 dollars are 9.31 euros
 */

/**
 * Convert an amount to dollars with an optional smiley for 1 million.
 * @param {number} amount - The amount to convert.
 * @returns {string} - Convert an amount to dollars with an optional smiley for 1 million.
 */
function money(amount) {
  // Initialize a variable
  let value;

  // Check if the amount is 1 (singular) or plural
  if (amount === 1 || amount === -1) {
    value = "dollar";
  } else {
    value = "dollars";
  }

  // Check if the amount is exactly 1 million (1000000)
  if (amount === 1000000) {
    // If it's 1 million, return the amount, value (dollars), and a smiley
    return `${amount} ${value} ;)`;
  } else {
    // Otherwise, return the amount and value (dollar or dollars)
    return `${amount} ${value}`;
  }
}

// Function calls and testing
console.log(money(1)); // Output: 1 dollar
console.log(money(-1)); // Output: -1 dollar
console.log(money(2)); // Output: 2 dollars
console.log(money(10)); // Output: 10 dollars
console.log(money(-3)); // Output: -3 dollars
console.log(money(1000000)); // Output: 1000000 dollars ;)
