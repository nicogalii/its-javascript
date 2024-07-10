/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 1.Big numbers
 * ● Write a function named greaterNum that:
 * ○ takes 2 arguments, both numbers.
 * ○ returns whichever number is the greater (higher) number.
 * ● Call that function 2 times with different number pairs, and log the output to
 * make sure it works (e.g. "The greater number of 5 and 10 is 10.").
 */

/**
* Print in console the greater number
* @param {number} num1 - number 1
* @param {number} num2 - number 2
*/
function greaterNum(num1, num2) {

    if (num1 > num2) {
        console.log(`Il numero maggiore tra ${num1} e ${num2} è ${num1}`);
    } else {
        console.log(`Il numero maggiore tra ${num1} e ${num2} è ${num2}`);
    }

}

// Prints the two function calls to the console
greaterNum(3, 6);
greaterNum(4, 2);
